<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags title=":3" description="Weird Web October 2025 - 20. Hidden" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Hidden" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <h1 class="hidden">:3</h1>
</div>

<style lang="scss">
  :root {
    --c-background: #e6b89c;
    --c-primary: #a54657;
    --c-secondary: #9cafb7;
    --c-text: #272838;
    --c-text-alt: #d9d7ea;
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

  .hidden {
    font-size: 10em;
    margin: auto;
    color: var(--c-background);
    transition-duration: 10s;

    &:hover {
      color: var(--c-primary);
      cursor: help;
    }
  }

  .back {
    position: absolute;
  }
</style>
