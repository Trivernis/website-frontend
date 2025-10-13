<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Downside-up."
  description="Weird Web October 2025 - 13. Upside-down"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Upside-down" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="australia"></div>
</div>

<style lang="scss">
  :root {
    --blink-background: #fcc;
  }
  .page {
    font-size: 10pt;
    background: black;
    color: white;
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

  .australia {
    background: url("/images/australia-upside-down.svg");
    background-size: contain;
    filter: grayscale(100%) brightness(1000%);
    height: 100%;
    width: auto;
    margin: auto;
    aspect-ratio: 166 / 151;
  }

  @media (aspect-ratio < 166 / 151) {
    .australia {
      height: auto;
      width: 100%;
    }
  }

  .back {
    position: absolute;
  }
</style>
