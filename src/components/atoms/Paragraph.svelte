<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<div class="paragraph">
  {@render children()}
</div>

<style lang="scss">
  @layer component {
    .paragraph {
      font-family: var(--font-readable);
      hyphens: auto;
      text-align: justify;
      cursor: text;
      font-size: 15pt;
    }
  }
</style>
