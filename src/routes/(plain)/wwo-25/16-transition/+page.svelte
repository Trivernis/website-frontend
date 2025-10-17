<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import fresh from "$lib/assets/mr-fresh.png?enhanced";
</script>

<MetaTags
  title="Transition"
  description="Weird Web October 2025 - 16. Transition"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Transition" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <enhanced:img
    src={fresh}
    alt="An image of the orange cat 'Mr. Fresh' giving a judging sideeye."
    class="fresh"
    fetchpriority="high"
  />
  <div class="fresh-overlay"></div>
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

  .fresh {
    margin: auto;
    display: block;
    height: 80%;
    width: 80%;
    object-fit: contain;
  }

  .fresh-overlay {
    position: absolute;
    left: calc(((max(100vh, 100vw) - min(100vh, 100vw)) / 2) * 0.8);
    background: rgba(0, 0, 0, 0);
    height: min(100vh, 100vw);
    width: calc(min(100vh, 100vw) * 1.2);
    animation-name: reveal-fresh;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier();
  }

  .back {
    position: absolute;
  }

  @keyframes reveal-fresh {
    @for $i from 1 through 360 {
      #{($i / 360) * 100}% {
        background: conic-gradient(
          rgba(0, 0, 0, 0) 0deg,
          rgba(0, 0, 0, 0) #{$i}deg,
          rgba(0, 0, 0, 1) #{$i}deg
        );
      }
    }
  }
</style>
