<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    ordered: boolean;
    start: string;
  };

  const { children, ordered, start }: Props = $props();
</script>

{#if ordered}
  <ol start={Number(start)} class="list ordered">
    {@render children()}
  </ol>
{:else}
  <ul class="list unordered">
    {@render children()}
  </ul>
{/if}

<style lang="scss">
  @layer component {
    .list {
      margin: 0;
      font-family: var(--font-readable);
    }
  }
</style>
