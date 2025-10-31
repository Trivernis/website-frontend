<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Deprecated"
  description="Weird Web October 2025 - 30. Deprecated"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Deprecated" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <marquee>They will never take this from us!</marquee>
  <marquee>The marquee element is superior</marquee>
  <marquee scrollamount="100"
    >Zooming across the page<marquee> </marquee></marquee
  >
  <marquee direction="right" scrollamount="100">In reverse!</marquee>
</div>

<style lang="scss">
  :root {
    --c-background: #36382e;
    --c-primary: #f06449;
    --c-secondary: light-dark(black, white);
    --c-text: light-dark(black, white);
    --c-text-alt: light-dark(white, black);
  }

  .page {
    font-size: 10pt;
    background: var(--c-background);
    color: var(--c-text);
    font-family: Lexend, Noto-sans, Verdana, Helvetica, sans-serif;
    position: absolute;
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -200;
    flex-direction: column;
    padding: 16px;
  }

  marquee {
    font-size: 5em;
    color: var(--c-primary);
  }

  .back {
    position: absolute;
  }
</style>
