<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import image from "$lib/assets/tokyo-rainbow-bridge.jpg?enhanced";

  const filterNames = [
    "filter-grayscale",
    "filter-red",
    "filter-blue",
    "filter-green",
    "filter-darken",
  ];
  const filters = filterNames.map((f) => ({
    name: f,
    angle: 0,
    position: { x: 0, y: 0 },
  }));

  for (let i = 0; i < filters.length; i++) {
    const angle = 2 * Math.PI * (i / filters.length);
    filters[i].angle = angle;
    filters[i].position = {
      x: 100 * Math.cos(angle),
      y: 100 * Math.sin(angle),
    };
  }

  let wheelAngle = $state(0);

  function nextFilter() {
    wheelAngle += 360 / filters.length;
  }
</script>

<MetaTags title="Filters" description="Weird Web October 2025 - 3. Filters" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Filters" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="page-container test-image-container">
    <enhanced:img
      src={image}
      alt="The rainbow bridge in Tokyo on a cloudy day. Phootographed from Odaiba."
      class="test-image"
    />
  </div>
  <div class="page-container wheel-container">
    <div
      class="filter-wheel"
      onclick={nextFilter}
      aria-hidden="true"
      style={`transform: rotate(${wheelAngle}deg)`}
    >
      {#each filters as filter}
        <div
          class={`filter ${filter.name}`}
          style={`transform: translate(${filter.position.x}%, ${filter.position.y}%)`}
        ></div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .page {
    background-color: black;
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
    user-select: none;
  }
  .page-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    top: 0;
    left: 0;
  }
  :global(.test-image-container picture) {
    height: auto;
    margin: auto;
  }
  .test-image {
    width: 50vw;
    height: auto;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 50px white;
  }
  .wheel-container {
    transform: translate(-50vw);
  }
  .filter-wheel {
    position: relative;
    height: 60vw;
    width: 60vw;
    margin: auto;
    margin-right: 0;
    transition-duration: 1s;
  }

  :global(.filter-wheel *, .filter-wheel::before, .filter-wheel::after) {
    box-sizing: unset !important;
  }

  .filter {
    height: calc(50% - 15px);
    width: calc(50% - 15px);
    border-radius: 100%;
    border: 15px solid black;
    outline: 5px dotted black;
    position: absolute;
    top: calc(50% - 25% - 15px);
    left: calc(50% - 25% - 15px);
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
  }
  .filter-red {
    backdrop-filter: grayscale(1) brightness(1.2);
    background: rgba(255, 0, 0, 0.5);
  }
  .filter-green {
    backdrop-filter: grayscale(1) brightness(1.2);
    background: rgba(0, 255, 0, 0.5);
  }
  .filter-blue {
    backdrop-filter: grayscale(1) brightness(1.2);
    background: rgba(0, 0, 255, 0.5);
  }
  .filter-grayscale {
    backdrop-filter: grayscale(1);
  }
  .filter-darken {
    backdrop-filter: brightness(0.6);
  }
  .back {
    z-index: 999;
  }

  @media (max-width: 650px) {
    .wheel-container {
      transform: scale(1.25) translate(-50vw);
    }
    .filter-wheel {
      height: 100vw;
      width: 100vw;
    }
    .test-image {
      width: 70vw;
    }
    .filter {
      border: 10px solid black;
      outline: 3px dotted black;
      top: calc(50% - 25% - 3px);
      left: calc(50% - 25% - 3px);
    }
  }
</style>
