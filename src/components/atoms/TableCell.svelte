<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<td class="table-cell">
  {@render children()}
</td>

<style lang="scss">
  @layer component {
    .table-cell {
      padding: 0.25em;
      border-top: 2px solid var(--color-context);
      border-left: 2px solid var(--color-context);

      &:first-child {
        border-left: none;
      }
    }
  }
</style>
