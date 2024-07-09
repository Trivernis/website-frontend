<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<p class="paragraph">
  {@render children()}
</p>

<style lang="scss">
  @layer component {
    .paragraph {
      margin: 0;
      font-family: var(--font-readable);
    }
  }
</style>
