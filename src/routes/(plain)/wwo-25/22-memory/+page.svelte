<script lang="ts">
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";

  const sequences: number[][] = [];

  const sequence = [Math.floor(Math.random() * 9)];

  for (let i = 0; i < 5; i++) {
    sequences.push([...sequence]);
    sequence.push(Math.floor(Math.random() * 9));
  }
  sequences.push(sequence);

  type PlayState = "playing" | "recording" | "error" | "success" | "victory";

  let gameState: PlayState = $state("playing");
  let sequenceNbr = 0;
  let activeTile: number | undefined = $state(undefined);

  let recordedSequence: number[] = [];

  function press(tile: number) {
    recordedSequence.push(tile);
    if (recordedSequence.length < sequences[sequenceNbr].length) {
      return;
    }

    console.log(recordedSequence.join(), sequences[sequenceNbr].join());

    if (recordedSequence.join() === sequences[sequenceNbr].join()) {
      if (sequenceNbr >= sequences.length - 1) {
        gameState = "victory";
        return;
      }
      gameState = "success";
      sequenceNbr += 1;

      setTimeout(() => {
        gameState = "playing";
      }, 1000);

      setTimeout(() => {
        playSequence();
      }, 2000);
    } else {
      gameState = "error";

      setTimeout(() => {
        gameState = "playing";
      }, 1000);

      setTimeout(() => {
        playSequence();
      }, 2000);
    }

    recordedSequence = [];
  }

  function playSequence() {
    let delay = 0;
    gameState = "playing";

    for (const tileId of sequences[sequenceNbr]) {
      setTimeout(() => {
        activeTile = tileId;
      }, delay);
      setTimeout(() => {
        activeTile = undefined;
      }, delay + 500);
      delay += 1000;
    }

    setTimeout(() => {
      activeTile = undefined;
      gameState = "recording";
    }, delay);
  }

  onMount(() => {
    setTimeout(playSequence, 2000);
  });
</script>

<MetaTags title="Memory" description="Weird Web October 2025 - 22. Memory" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Memory" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="grid">
    {#each { length: 9 } as _, i}
      <button
        id="tile-{i}"
        class="tile state-{gameState} {i === activeTile ? 'tile-active' : ''}"
        onclick={() => press(i)}
        aria-label="Tile-{i}"
        disabled={gameState !== "recording"}
        style="--hue: {360 * (i / 9)}deg"
      ></button>
    {/each}
  </div>
</div>

<style lang="scss">
  :root {
    --c-background: #9a94bc;
    --c-primary: #8fb8de;
    --c-secondary: #9b5094;
    --c-error: #ff3333;
    --c-success: #91c45a;
    --c-text: #cdf7f6;
    --c-text-alt: #2d2d34;
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

  .grid {
    display: grid;
    position: relative;
    height: min(90vh, 90vw);
    width: min(90vh, 90vw);
    margin: auto;

    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .tile {
    background-color: var(--c-primary);
    border: none;
    margin: 10px;
    transition-duration: 0.2s;
    cursor: default;

    &.state-playing {
      transition-duration: 0.5s;
    }

    &.state-recording:hover {
      box-shadow: inset 0 0 5px var(--c-secondary);
      cursor: pointer;
    }

    &.state-recording:active {
      background-color: var(--c-secondary);
    }

    &.state-error {
      background-color: var(--c-error);
    }

    &.state-success {
      background-color: var(--c-success);
    }

    &.state-victory {
      background-color: hsl(var(--hue) 70% 65%);
      animation-name: rainbow;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  .tile-active {
    background-color: var(--c-secondary);
  }

  .back {
    position: absolute;
  }

  @keyframes rainbow {
    0% {
      filter: hue-rotate(0);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
</style>
