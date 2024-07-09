<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    depth: number;
  };

  const { children, depth }: Props = $props();
  if (depth < 0 || depth > 6) {
    throw new Error("depth must be 0-6");
  }
</script>

<svelte:element this={`h${depth}`} class="heading">
  {@render children()}
</svelte:element>

<style lang="scss">
  @layer component {
    .heading {
      font-family: var(--font-primary);
      margin: 0.2em 0;
      text-decoration: underline 0.2em var(--color-context);
    }
  }
</style>
