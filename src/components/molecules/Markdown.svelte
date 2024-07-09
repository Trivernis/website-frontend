<script lang="ts">
  import { marked } from "marked";
  import Heading from "../atoms/Heading.svelte";
  import Paragraph from "../atoms/Paragraph.svelte";
  import Space from "../atoms/Space.svelte";
  import List from "../atoms/List.svelte";
  import ListItem from "../atoms/ListItem.svelte";
  import HighlightedCode from "../atoms/HighlightedCode.svelte";

  type Props = {
    markdown: string;
  };

  const { markdown }: Props = $props();

  const markdownTokens = marked.lexer(markdown);
</script>

{#snippet markdownToken(token)}
  {#if token.type === "text"}
    {token.text}
  {:else if token.type === "heading"}
    <Heading depth={token.depth}>
      {token.text}
    </Heading>
  {:else if token.type === "paragraph"}
    <Paragraph>
      {token.text}
    </Paragraph>
  {:else if token.type === "code"}
    <HighlightedCode language={token.language} code={token.text} />
  {:else if token.type === "space"}
    <Space />
  {:else if token.type === "list"}
    <List ordered={token.ordered} start={token.start}>
      {#each token.items as item}
        {@render markdownToken(item)}
      {/each}
    </List>
  {:else if token.type === "list_item"}
    <ListItem>
      {#each token.tokens as itemToken}
        {@render markdownToken(itemToken)}
      {/each}
    </ListItem>
  {:else}
    <pre>{JSON.stringify(token, null, 2)}</pre>
  {/if}
{/snippet}

<div class="markdown">
  {#each markdownTokens as token}
    {@render markdownToken(token)}
  {/each}
</div>

<style lang="scss">
  @layer component {
    .markdown {
      hyphens: auto;
      text-align: justify;
      cursor: text;
      font-size: 15pt;
    }

    :global(.heading) {
      font-size: 20pt;
    }
  }
</style>
