<script lang="ts">
  import { tickCritter, type Critter, type World } from "$lib/wwo/critter";
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";

  const UPDT_INT = Math.round(1000 / 15);

  let critters: Critter[] = $state([]);
  let winner: string | undefined = $state(undefined);

  let interval: number;
  let lastUpdate = Date.now();

  function tick() {
    const delta = Date.now() - lastUpdate;
    lastUpdate = Date.now();

    const world: World = { critters, damages: {} };
    const newCritters = [];

    for (const critter of critters) {
      newCritters.push(tickCritter(critter, world, delta / UPDT_INT));
    }

    for (const critter of newCritters) {
      const dmg = world.damages[critter.id];

      if (dmg) {
        critter.health = Math.max(critter.health - dmg, 0);
      }
    }

    critters = newCritters.filter((c) => c.health > 0);

    const redCount = critters.filter((c) => c.team === 0).length;
    const blueCount = critters.filter((c) => c.team === 1).length;

    if (redCount === 0 && blueCount > 0) {
      winner = "BLUE";
      clearInterval(interval);
    } else if (redCount > 0 && blueCount === 0) {
      winner = "RED";
      clearInterval(interval);
    } else if (redCount === 0 && blueCount === 0) {
      winner = "Nobody";
      clearInterval(interval);
    }
  }

  function reset() {
    interval = setInterval(tick, UPDT_INT);

    const critterInit: Critter[] = [];

    for (let i = 0; i < 100; i++) {
      critterInit.push({
        id: `red-${i}`,
        team: 0,
        pos: {
          x: Math.random() * 10 + 5,
          y: Math.random() * 90 + 5,
        },
        health: 100,
      });
      critterInit.push({
        id: `blue-${i}`,
        team: 1,
        pos: {
          x: 90 + (Math.random() * 10 - 5),
          y: Math.random() * 90 + 5,
        },
        health: 100,
      });
    }

    winner = undefined;
    lastUpdate = Date.now();
    critters = critterInit;
  }

  reset();
</script>

<MetaTags
  title="To Battle!"
  description="Weird Web October 2025 - 12. Battle"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Battle" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="battlefield">
    {#each critters as critter (critter.id)}
      <div
        class={critter.team === 0 ? "red" : "blue"}
        style="left: {critter.pos.x}%; top: {critter.pos.y}%"
      ></div>
    {/each}
  </div>
  {#if winner}
    <div class="winner-display">
      <div class="text-container">
        <h1>{winner} Won!</h1>
        <button onclick={reset}>Again!</button>
      </div>
    </div>
  {/if}
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

  .battlefield {
    height: 90%;
    width: auto;
    margin: auto;
    aspect-ratio: 1 / 1;
    background-color: #071004;
    outline: 20px solid#071004;
    position: relative;

    .red,
    .blue {
      position: absolute;
      display: block;
      height: 0.5%;
      width: 0.5%;
      border-radius: 100%;
      transition-duration: 50ms;
    }

    .red {
      background-color: red;
    }
    .blue {
      background-color: blue;
    }
  }

  .winner-display {
    position: absolute;
    left: 10%;
    top: 10%;
    height: 80%;
    width: 80%;
    display: flex;

    .text-container {
      margin: auto;
      display: flex;
      flex-direction: column;

      h1 {
        text-align: center;
        font-size: 10em;
        margin-bottom: 0;
      }
      button {
        font-size: 3em;
        border: none;
        margin: auto;
        padding: 0.25em 0.5em;
        border-radius: 0.5em;
        background-color: #c52;
        cursor: pointer;
        transition-duration: 0.2s;

        &:hover {
          background-color: #d52;
        }
        &:active {
          background-color: #a52;
          transform: scale(90%);
        }
      }
    }
  }

  @media (aspect-ratio < 1 / 1) {
    .battlefield {
      height: auto;
      width: 90%;
    }
  }

  .back {
    position: absolute;
  }
</style>
