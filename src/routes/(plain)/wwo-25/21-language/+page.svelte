<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags title="Boo" description="Weird Web October 2025 - 21. Language" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Language" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <h1 class="boo">/buː/👻</h1>
</div>

<style lang="scss">
  :root {
    --c-background: #404263;
    --c-primary: #00a6a6;
    --c-secondary: #ff1053;
    --c-text: #ffffff;
    --c-text-alt: #2e3532;
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

  .boo {
    animation-name: reveal;
    animation-duration: 2s;
    font-size: 7em;
    margin: auto;
  }

  .back {
    position: absolute;
  }

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
