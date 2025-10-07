<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import sandwich from "$lib/assets/subway-sandwich.webp?enhanced";

  // I know this is not perfect there's overlap and positions are inaccurate.
  // it's just SUBOPTIMAL
  const subPositions = [
    {
      x: 0.01,
      y: 0,
      r: 0,
    },
    {
      x: 1.47,
      y: 0.25,
      r: 40,
    },
    {
      x: 3,
      y: 0,
      r: 0,
    },
    {
      x: 0.8,
      y: 1.0,
      r: 40,
    },
    {
      x: 2.2,
      y: 1.0,
      r: 40,
    },
    {
      x: 1.5,
      y: 1.75,
      r: 40,
    },
    {
      x: 0,
      y: 1.94,
      r: 0,
    },
    {
      x: 2.75,
      y: 1.9,
      r: 40,
    },
    {
      x: 0,
      y: 2.97,
      r: 0,
    },
    {
      x: 1.05,
      y: 2.97,
      r: 0,
    },
    {
      x: 2.11,
      y: 2.97,
      r: 0,
    },
  ];
</script>

<MetaTags
  title="Sub-optimal Sub 🥖 Packing"
  description="Weird Web October 2025 - 7. Sub-optimal"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Sub-optimal" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div
    class="square"
    aria-label="Square of subway sandwiches arranged in 11 unit square packing order"
  >
    {#each subPositions as pos}
      <a
        href="https://en.wikipedia.org/wiki/Subway_(restaurant)#Controversies"
        aria-label="Subway"
        class="sub-link"
        style="left: {pos.x * 25}%; top: {pos.y *
          25}%; transform: rotate({pos.r}deg)"
      >
        <enhanced:img
          src={sandwich}
          alt="A subway sandwich."
          class="sub"
          fetchpriority="high"
        />
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
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

    animation-name: animate-hue;
    animation-duration: 11s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }

  .back {
    position: absolute;
  }

  .square {
    max-height: 90%;
    max-width: 90%;
    aspect-ratio: 1 / 1;
    margin: auto;
    border: 5px solid white;
    position: relative;
    background: url("/images/packing.svg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 90%;
    width: auto;
  }

  @media (aspect-ratio < 1/1) {
    .square {
      width: 90%;
      height: auto;
    }
  }

  .sub-link {
    cursor: pointer;
    position: absolute;
    height: 25.5%;
    width: 25.5%;
    text-decoration: none;

    &:hover {
      background: none;
      img {
        filter: hue-rotate(90deg);
      }
    }
  }

  .sub {
    height: 100%;
    width: 100%;
    object-fit: contain;
    animation-name: trembling;
    animation-iteration-count: infinite;
    animation-duration: 0.1s;
    transition-duration: 0.2s;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
  }

  @keyframes trembling {
    0% {
      rotate: 0.2deg;
    }
    50% {
      rotate: -0.2deg;
    }
    100% {
      rotate: 0.2deg;
    }
  }
</style>
