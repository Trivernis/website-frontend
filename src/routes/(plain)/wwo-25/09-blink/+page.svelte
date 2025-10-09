<script lang="ts">
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";

  let animationModifier = $state(Math.random());

  onMount(() => {
    setInterval(() => {
      animationModifier = Math.random();
    }, 1000);
  });
</script>

<MetaTags title="Containers" description="Weird Web October 2025 - 9. Blink" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Blink" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="blade" style="--animation-modifier: {animationModifier}">
    <div class="mount"></div>
    <div class="cooling-grid">
      {#each { length: 21 } as _}
        <div class="grid-tile"></div>
      {/each}
    </div>
    <div class="buttons">
      <div class="button-blink button-red"></div>
      <div class="button-blink button-green"></div>
      <div class="button-blink button-blue"></div>
      <div class="indent"></div>
    </div>
    <div class="mount"></div>
  </div>
</div>

<style lang="scss">
  :root {
    --blink-background: #fcc;
  }
  .page {
    font-size: 10pt;
    background: var(--blink-background);
    color: black;
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
  }

  .blade {
    margin: auto;
    width: 80%;
    height: auto;
    aspect-ratio: 100 / 15;
    background-color: #222;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 2fr 10fr 5fr 2fr;

    .indent {
      background-color: #151515;
      height: 100%;
      width: 100%;
      margin: auto;
    }

    .mount {
      margin: auto;
      height: 80%;
      width: 30%;
      background-color: var(--blink-background);
    }

    .cooling-grid {
      height: 80%;
      width: 70%;
      padding: 2.5%;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10%;

      .grid-tile {
        height: 100%;
        width: 100%;
        background-color: #121212;
      }
    }

    .buttons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 30% 1fr;
      width: auto;
      height: 80%;
      margin: auto 0;
      padding: 1em;
      gap: 3em;

      .button-blink {
        height: 100%;
        width: auto;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        margin: auto;
        animation-name: blink;
        animation-iteration-count: infinite;
      }

      .button-green {
        background-color: #88ff88;
        box-shadow: 0 0 5px #88ff88;
        animation-name: blink-2;
        animation-duration: calc(10s * var(--animation-modifier));
      }

      .button-red {
        background-color: #ff3333;
        box-shadow: 0 0 5px #ff3333;
        animation-duration: calc(0.4s * var(--animation-modifier));
      }

      .button-blue {
        background-color: #7777ff;
        box-shadow: 0 0 5px #7777ff;
        animation-duration: calc(1s * var(--animation-modifier));
      }

      .indent {
        grid-column: 1 / -1;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: 700px) {
    .blade {
      border-radius: 10px;

      .buttons {
        gap: 0.7em;
        height: 90%;
      }
    }
  }

  .back {
    position: absolute;
  }

  @keyframes blink {
    0% {
      filter: brightness(100%);
    }
    20% {
      filter: brightness(100%);
    }
    21% {
      filter: brightness(20%);
      box-shadow: none;
    }
    98% {
      filter: brightness(20%);
      box-shadow: none;
    }
    100% {
      filter: brightness(100%);
    }
  }
  @keyframes blink-2 {
    0% {
      filter: brightness(100%);
    }
    85% {
      filter: brightness(100%);
    }
    90% {
      filter: brightness(80%);
    }
    95% {
      filter: brightness(50%);
    }
  }
</style>
