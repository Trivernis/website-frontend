<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import kite from "$lib/assets/kite.jpg?enhanced";

  const focusTarget = Math.round(Math.random() * 100);

  let sliderPosition = $state(0);
  let mouseDown = $state(false);
  let focusAmount = $state(0);

  let slider: HTMLDivElement | undefined;

  function moveSlider(amount: number) {
    const maxWidth = slider?.clientWidth ?? 100 * 9;

    if (mouseDown) {
      sliderPosition = Math.max(Math.min(sliderPosition - amount, maxWidth), 0);
      focusAmount = sliderPosition / maxWidth;
      console.log("pos", sliderPosition);
    }
  }
</script>

<MetaTags
  title="Focus the Image"
  description="Weird Web October 2025 - 11. Camera"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Camera" />
</svelte:head>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="page"
  onmouseup={() => {
    mouseDown = false;
  }}
  onmousemove={(event) => moveSlider(event.movementX)}
>
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <h1 class="page-title">Focus the Image</h1>
  <div class="image-container">
    <enhanced:img
      src={kite}
      alt="A picture of a kite"
      class="sub"
      fetchpriority="high"
      style="filter: blur({Math.abs(focusTarget / 10 - focusAmount * 10)}px);"
    />
  </div>
  <span
    class="focus-amount"
    style={Math.round(focusAmount * 100) === Math.round(focusTarget)
      ? "color: #AF8"
      : "color: #F78"}>{Math.round(focusAmount * 100)}</span
  >
  <div class="focus-slider" bind:this={slider}>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div
      role="application"
      class="focus-slider-handle"
      style="left: -{sliderPosition}px"
      onmousedown={() => {
        mouseDown = true;
      }}
    >
      {#each { length: 1000 } as _, i}
        {#if i % 10 == 0}
          <div class="focus-line focus-line-tall"></div>
        {:else}
          <div class="focus-line"></div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .page {
    font-size: 10pt;
    background: #355;
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
    user-select: none;
  }

  .page-title {
    margin: auto;
    padding: 16px;
    font-size: 3em;
  }

  .image-container {
    height: 70%;
    width: 70%;
    margin: auto;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 2vh;
    }
  }

  @media (max-width: 700px) {
    .image-container {
      width: calc(100% - 16px);
    }
  }
  @media (max-width: 500px) {
    .image-container {
      height: 50%;
    }
  }

  .focus-amount {
    font-size: 4em;
    margin: auto;
  }

  .focus-slider {
    height: 2em;
    width: 80%;
    margin: auto;
    background-color: black;
    border-radius: 0.5vh;
    overflow: hidden;
    position: relative;

    .focus-slider-handle {
      height: 100%;
      width: 1000%;
      background-color: #222;
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 0;

      .focus-line {
        height: 60%;
        width: 2px;
        background-color: rgba(255, 255, 255, 0.5);
        margin: auto;
      }

      .focus-line-tall {
        height: 80%;
      }
    }
  }

  .back {
    position: absolute;
  }
</style>
