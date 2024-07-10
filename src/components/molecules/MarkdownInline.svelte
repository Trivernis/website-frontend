<script lang="ts">
  import type { Token } from "marked";
  import HighlightedCode from "../atoms/HighlightedCode.svelte";
  import { smartypants } from "$lib/utils";

  type Props = {
    markdownToken: Token;
  };

  const { markdownToken }: Props = $props();
</script>

{#snippet inlineMarkdown(token)}
  {#if token.type === "text" || token.type === "escape"}
    {@render tokenValue(token)}
  {:else if token.type === "strong"}
    <strong>{@render tokenValue(token)}</strong>
  {:else if token.type === "link"}
    <a href={token.href} title={token.title}>{@render tokenValue(token)}</a>
  {:else if token.type === "em"}
    <em>{@render tokenValue(token)}</em>
  {:else if token.type === "del"}
    <del>{@render tokenValue(token)}</del>
  {:else if token.type === "codespan"}
    <code>{@render tokenValue(token)}</code>
  {:else if token.type === "emoji"}
    <span class="emoji" title={token.name}>{token.emoji}</span>
  {:else}
    <h4 style="color: var(--color-red)">This needs to be rendered</h4>
    <HighlightedCode code={JSON.stringify(token, null, 2)} />
  {/if}
{/snippet}

{#snippet tokenValue(token)}
  {#if token.tokens}
    {#each token.tokens as childToken}
      {@render inlineMarkdown(childToken)}
    {/each}
  {:else if token.type === "codespan"}
    <!-- don't smartypants code -->
    {@html token.text}
  {:else}
    {@html smartypants(token.text)}
  {/if}
{/snippet}

{@render inlineMarkdown(markdownToken)}

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .emoji {
      font-family: var(--font-emoji);
      font-weight: bold;
      @include lighten-color(color, var(--color-context));
      text-shadow: 0 0 5px var(--color-context);
    }
  }
</style>
