<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  let asking = $state(true);
  import fresh from "$lib/assets/tiny-shrimp.jpg?enhanced";
</script>

<MetaTags
  title="Trading your Soul"
  description="Weird Web October 2025 - 18. Trading"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Trading" />
</svelte:head>

<div
  class="page"
  onmousemove={(event) => updateShadow({ x: event.pageX, y: event.pageY })}
  ontouchmove={(event) =>
    updateShadow({
      x: event.touches.item(0)?.pageX ?? 0,
      y: event.touches.item(0)?.pageY ?? 0,
    })}
  role="application"
>
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  {#if asking}
    <span class="trade-offer"
      >Do you want to trade your soul for a shrimp picture?</span
    >
    <button
      class="trade-button"
      onclick={() => setTimeout(() => (asking = false), 200)}>Trade</button
    >
  {:else}
    <enhanced:img
      src={fresh}
      alt="An image of a tiny translucent dwarf shrimp walking down a root."
      class="shrimp"
      fetchpriority="high"
    />
  {/if}
</div>

<style lang="scss">
  :root {
    --blink-background: #fcc;
  }
  .page {
    font-size: 10pt;
    background: #392f5a;
    color: #d6edff;
    font-family: Lexend, Noto-sans, Verdana, Helvetica, sans-serif;
    font-variant-emoji: emoji;
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

  .trade-offer {
    font-size: 7em;
    width: 100%;
    margin: auto;
    padding: 0 5em;
    text-align: center;
  }
  .trade-button {
    margin: auto;
    font-size: 7em;
    background-color: #1b998b;
    color: hsl(from #392f5a h s 15%);
    padding: 0.25em 0.5em;
    border: none;
    border-radius: 0.25em;
    transition-duration: 0.2s;
    cursor: pointer;

    &:active {
      box-shadow: inset 10px 10px rgba(0, 0, 0, 0.8);
      padding: calc(0.25em + 5px) calc(0.5em - 5px) calc(0.25em - 5px)
        calc(0.5em + 5px);
      transform: translate(10px, 10px);
    }
  }
  @media (max-width: 1600px) {
    .trade-offer {
      padding: 0 2em;
    }
  }

  @media (max-width: 1000px) {
    .page {
      font-size: 0.5em;
    }

    .trade-offer {
      padding: 0 16px;
    }
  }

  .shrimp {
    display: block;
    height: min(90vh, 90vw);
    width: min(90vh, 90vw);
    margin: auto;
    object-fit: contain;
  }

  .back {
    position: absolute;
  }
</style>
