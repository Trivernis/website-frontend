<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    header: Snippet;
    rows: Snippet;
  };

  const { header, rows }: Props = $props();
</script>

<table class="table">
  <thead>
    {@render header()}
  </thead>
  <tbody>
    {@render rows()}
  </tbody>
</table>

<style lang="scss">
  @layer component {
    .table {
      border-collapse: true;
      margin: 1em 0;

      thead {
        font-family: var(--font-heading);
      }
      tbody {
        font-family: var(--font-readable);
      }
    }
  }
</style>
