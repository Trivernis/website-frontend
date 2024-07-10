<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<th class="table-header">
  {@render children()}
</th>

<style lang="scss">
  @layer component {
    .table-header {
      padding: 0.25em;
      border-left: 2px solid var(--color-context);

      &:first-child {
        border-left: none;
      }
    }
  }
</style>
