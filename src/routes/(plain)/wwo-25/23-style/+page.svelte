<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Graphic Design is my Passion!"
  description="Weird Web October 2025 - 23. Style"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Style" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="text">
    <h1>Graphic Design is my passion!</h1>
    <h2 class="primary">Styling a website is a piece of cake</h2>
    <h3 class="secondary">I would call myself a professional</h3>
    <h4 class="alt">It's very important that the contrast is high enough.</h4>
  </div>
</div>

<style lang="scss">
  :root {
    --c-background: #3a86ff;
    --c-primary: #ff006e;
    --c-secondary: #fb5607;
    --c-text: #ffbe0b;
    --c-text-alt: #8338ec;
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

  .primary {
    color: var(--c-primary);
  }

  .secondary {
    color: var(--c-secondary);
  }

  .alt {
    color: var(--c-text-alt);
  }

  h2 {
    font-size: 3em;
  }

  h3 {
    font-size: 4em;
  }

  h4 {
    font-size: 5em;
  }

  .text {
    overflow-y: auto;
  }

  .back {
    position: absolute;
  }
</style>
