<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<div class="page crt">
  <div class="content">
    {@render children()}
  </div>
</div>

<style lang="scss">
  @layer layout {
  }
</style>
