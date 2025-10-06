<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import image from "$lib/assets/25-10-06_solids.jpg?enhanced";
  import { onMount } from "svelte";
</script>

<MetaTags
  title="Tasty Solids"
  description="Weird Web October 2025 - 6. Solids"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Solids" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <enhanced:img
    src={image}
    alt="A cherry shrimp sitting on a root eating some platonic solids. The text on the image says 'THESE ARE HER FAVOURITES'."
    class="shrimp-image"
    fetchpriority="high"
  />
</div>

<style lang="scss">
  .page {
    font-size: 10pt;
    background: linear-gradient(45deg, #ffcc00 0%, #00ffcc 50%, #cc00ff 100%);
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

    animation-name: animate-hue;
    animation-duration: 11s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }

  .back {
    position: absolute;
  }

  .shrimp-image {
    height: calc(100% - 2em);
    width: calc(100% - 2em);
    margin: 1em;
    image-rendering: optimizeSpeed;
    object-fit: contain;

    animation-name: animate-hue;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }

  @keyframes animate-hue {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
</style>
