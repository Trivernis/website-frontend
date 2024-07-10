<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<blockquote class="blockquote">
  {@render children()}
</blockquote>

<style lang="scss">
  @layer component {
    .blockquote {
      margin: 0;
      padding-left: 0.5em;
      border-left: 5px solid var(--color-context);
      border-radius: 5px;
      background-color: var(--color-background-light);
      font-family: var(--font-readable);

      :global(> .blockquote) {
        box-shadow: 0 -5px 5px var(--color-background);
      }
    }
  }
</style>
