<script lang="ts">
  import { marked } from "marked";
  import Heading from "../atoms/Heading.svelte";
  import Paragraph from "../atoms/Paragraph.svelte";
  import Space from "../atoms/Space.svelte";
  import List from "../atoms/List.svelte";
  import ListItem from "../atoms/ListItem.svelte";
  import HighlightedCode from "../atoms/HighlightedCode.svelte";
  import HorizontalRuler from "../atoms/HorizontalRuler.svelte";
  import MarkdownInline from "./MarkdownInline.svelte";
  import Blockquote from "../atoms/Blockquote.svelte";
  import Table from "../atoms/Table.svelte";
  import TableHeader from "../atoms/TableHeader.svelte";
  import TableRow from "../atoms/TableRow.svelte";
  import TableCell from "../atoms/TableCell.svelte";
  import Image from "../atoms/Image.svelte";
  import emojis from "$lib/emojis";
  import { smartypants } from "$lib/utils";

  import { markedEmoji } from "marked-emoji";

  type Props = {
    markdown: string;
  };

  const { markdown }: Props = $props();

  marked.use(markedEmoji({ emojis }));

  const markdownTokens = marked.lexer(markdown);
</script>

{#snippet markdownToken(token)}
  {#if ["text", "strong", "link", "em", "del", "codespan", "emoji"].includes(token.type)}
    <MarkdownInline markdownToken={token} />
  {:else if token.type === "heading"}
    <Heading depth={token.depth}>
      {@render tokenValue(token)}
    </Heading>
  {:else if token.type === "paragraph"}
    <Paragraph>
      {@render tokenValue(token)}
    </Paragraph>
  {:else if token.type === "blockquote"}
    <Blockquote>
      {@render tokenValue(token)}
    </Blockquote>
  {:else if token.type === "code"}
    <HighlightedCode language={token.language} code={token.text} />
  {:else if token.type === "space"}
    <Space />
  {:else if token.type === "hr"}
    <HorizontalRuler />
  {:else if token.type === "image"}
    <Image src={token.href} text={token.text} title={token.title} />
  {:else if token.type === "list"}
    <List ordered={token.ordered} start={token.start}>
      {#each token.items as item}
        {@render markdownToken(item)}
      {/each}
    </List>
  {:else if token.type === "table"}
    <Table>
      {#snippet header()}
        {#each token.header as header}
          <TableHeader>
            {@render tokenValue(header)}
          </TableHeader>
        {/each}
      {/snippet}
      {#snippet rows()}
        {#each token.rows as row}
          <TableRow>
            {#each row as cell}
              <TableCell>
                {@render tokenValue(cell)}
              </TableCell>
            {/each}
          </TableRow>
        {/each}
      {/snippet}
    </Table>
  {:else if token.type === "list_item"}
    <ListItem>
      {@render tokenValue(token)}
    </ListItem>
  {:else}
    <h4 style="color: var(--color-red)">This needs to be rendered</h4>
    <HighlightedCode language="json" code={JSON.stringify(token, null, 2)} />
  {/if}
{/snippet}

{#snippet tokenValue(token)}
  {#if token.tokens}
    {#each token.tokens as childToken}
      {@render markdownToken(childToken)}
    {/each}
  {:else if token.text}
    {@html smartypants(token.text)}
  {:else}{@html "<!-- This token does not hold value -->"}{/if}
{/snippet}

<div class="markdown">
  {#each markdownTokens as token}
    {@render markdownToken(token)}
  {/each}
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .markdown {
      hyphens: auto;
      text-align: justify;
      cursor: text;
      font-size: 15pt;

      @include portrait {
        font-size: 13pt;
      }
    }

    :global(.heading) {
      font-size: 20pt;
    }
  }
</style>
