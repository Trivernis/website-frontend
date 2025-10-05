<script lang="ts">
  import "../../global.scss";
  import type { Snippet } from "svelte";
  import { page } from "$app/state";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
  const preloadHref = `https://octothorp.es/?uri=https://trivernis.net${page.url.pathname}`;
</script>

<svelte:head>
  <link rel="preload" as="fetch" href={preloadHref} />
</svelte:head>

<div class="page crt">
  <div class="content">
    {@render children()}
  </div>
</div>

<style lang="scss">
  @layer layout {
  }
</style>
