<script lang="ts">
  import "../../global.scss";
  import Header from "../../components/organisms/Header.svelte";
  import Footer from "../../components/organisms/Footer.svelte";
  import type { Snippet } from "svelte";
  import { page } from "$app/state";

  const preloadHref = `https://octothorp.es/?uri=https://trivernis.net${page.url.pathname}`;

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<svelte:head>
  <link rel="preload" as="fetch" href={preloadHref} />
</svelte:head>

<div class="page crt">
  <Header />
  <div class="content">
    {@render children()}
  </div>
  <div class="footer-position">
    <Footer />
  </div>
</div>

<style lang="scss">
  @import "$lib/vars.scss";

  @layer layout {
    .page {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    .footer-position {
      margin: 0;
      width: 100%;
      height: auto;
      display: flex;
      padding-top: 1em;
      margin-top: auto;
    }
  }
</style>
