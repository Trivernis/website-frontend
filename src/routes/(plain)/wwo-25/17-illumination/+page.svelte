<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  let targetText: HTMLHeadingElement | undefined;

  let shadowPosition = $state({
    x: 0,
    y: 0,
  });

  let cursorPosition = $state({ x: 0, y: 0 });

  function updateShadow(cursorPos: { x: number; y: number }) {
    cursorPosition = cursorPos;
    if (!targetText) {
      return;
    }
    const rect = targetText.getBoundingClientRect();
    shadowPosition.x = (rect.x + rect.width / 2 - cursorPos.x) / 10;
    shadowPosition.y = (rect.y + rect.height / 2 - cursorPos.y) / 10;
  }
</script>

<MetaTags
  title="Illumination"
  description="Weird Web October 2025 - 17. Illumination"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Illumination" />
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
  <h1
    class="target-text"
    bind:this={targetText}
    style="text-shadow: {shadowPosition.x}px {shadowPosition.y}px 15px black"
  >
    Illumination
  </h1>
  <div
    class="light-overlay"
    style="top: calc({cursorPosition.y}px - 40em); left: calc({cursorPosition.x}px - 40em)"
  ></div>
  <div
    class="black-overlay"
    style="top: calc({cursorPosition.y}px - 50em); left: calc({cursorPosition.x}px - 50em)"
  ></div>
</div>

<style lang="scss">
  :root {
    --blink-background: #fcc;
  }
  .page {
    font-size: 10pt;
    background: #337;
    color: #faf;
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

  .target-text {
    font-size: 10em;
    margin: auto;
  }

  .light-overlay {
    position: absolute;
    outline: 1000px solid black;
    height: 80em;
    width: 80em;
    border-radius: 100%;
    box-shadow: inset 0 0 10em black;
  }

  .black-overlay {
    position: absolute;
    outline: 10000px solid black;
    height: 100em;
    width: 100em;
    border-radius: 100%;
  }

  @media (max-width: 900px) {
    .page {
      font-size: 0.4em;
    }
  }

  .back {
    position: absolute;
  }
</style>
