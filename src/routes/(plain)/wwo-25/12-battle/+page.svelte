<script lang="ts">
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";

  type Critter = {
    id: string;
    x: number;
    y: number;
    dead: boolean;
    health: number;
  };

  const UPDT_INT = Math.round(1000 / 15);

  let redPositions: Critter[] = $state([]);
  let bluePositions: Critter[] = $state([]);
  let winner: string | undefined = $state(undefined);

  function clamp(num: number, min: number, max: number): number {
    return Math.max(Math.min(num, max), min);
  }

  function distance(pos1: Critter, pos2: Critter): number {
    return Math.sqrt(
      Math.abs(pos2.x - pos1.x) ** 2 + Math.abs(pos2.y - pos1.y) ** 2,
    );
  }

  function move(
    positions: Critter[],
    others: Critter[],
    delta: number,
  ): Critter[] {
    const normSpeed = delta / UPDT_INT;

    return positions.map((pos) => {
      const healthSpeed = (pos.health / 100) * 2;
      const speedMod = normSpeed * healthSpeed;

      const closestOther = others.toSorted(
        (b1, b2) => distance(b1, pos) - distance(b2, pos),
      )[0];

      const randomMove = {
        ...pos,
        x:
          Math.round(
            clamp(
              pos.x + (Math.round(Math.random() * 2) - 1) * speedMod,
              0,
              100,
            ),
          ) * normSpeed,
        y: Math.round(
          clamp(pos.y + (Math.round(Math.random() * 2) - 1) * speedMod, 0, 100),
        ),
      };

      if (!closestOther || Math.random() > 0.99) {
        return randomMove;
      }

      let fightOrFlight = 1;

      if (closestOther.health > pos.health) {
        fightOrFlight = -1;
      }

      const xDistance = closestOther.x - pos.x;
      const yDistance = closestOther.y - pos.y;

      const moveDirection = {
        x: 0,
        y: 0,
      };

      if (Math.abs(xDistance) > Math.abs(yDistance)) {
        if (xDistance > 1) {
          moveDirection.x = 1;
        } else {
          moveDirection.x = -1;
        }
      } else {
        if (yDistance > 1) {
          moveDirection.y = 1;
        } else {
          moveDirection.y = -1;
        }
      }

      return {
        ...pos,
        x: clamp(pos.x + moveDirection.x * speedMod * fightOrFlight, 0, 100),
        y: clamp(pos.y + moveDirection.y * speedMod * fightOrFlight, 0, 100),
      };
    });
  }

  function updateHealth(critter: Critter, enemies: Critter[]) {
    const inRange = enemies.filter((e) => distance(e, critter) < 5);
    const totalDamage = inRange
      .map((e) => (e.health / 10) * (5 / distance(e, critter)))
      .reduce((acc, cur) => {
        acc += cur;
        return acc;
      }, 0);

    const newCritter = { ...critter };
    newCritter.health -= Math.max(totalDamage, 0);

    if (newCritter.health <= 0) {
      newCritter.dead = true;
    }

    return newCritter;
  }

  let interval: number;
  let lastUpdate = Date.now();

  function tick() {
    const delta = Date.now() - lastUpdate;
    lastUpdate = Date.now();

    const updatedRed = redPositions
      .map((red) => updateHealth(red, bluePositions))
      .filter((c) => !c.dead);
    const updatedBlue = bluePositions
      .map((blue) => updateHealth(blue, redPositions))
      .filter((c) => !c.dead);

    if (updatedRed.length === 0 && updatedBlue.length > 0) {
      winner = "BLUE";
      clearInterval(interval);
    } else if (updatedRed.length > 0 && updatedBlue.length === 0) {
      winner = "RED";
      clearInterval(interval);
    } else if (updatedRed.length === 0 && updatedBlue.length === 0) {
      winner = "Nobody";
      clearInterval(interval);
    }

    const newRed = move(updatedRed, updatedBlue, delta);
    bluePositions = move(updatedBlue, updatedRed, delta);
    redPositions = newRed;
  }

  function reset() {
    interval = setInterval(tick, UPDT_INT);

    const redInit: Critter[] = [];
    const blueInit: Critter[] = [];

    for (let i = 0; i < 100; i++) {
      redInit.push({
        id: `red-${i}`,
        x: Math.random() * 10 + 5,
        y: Math.random() * 90 + 5,
        dead: false,
        health: 100,
      });
      blueInit.push({
        id: `blue-${i}`,
        x: 90 + (Math.random() * 10 - 5),
        y: Math.random() * 90 + 5,
        dead: false,
        health: 100,
      });
    }

    redPositions = redInit;
    bluePositions = blueInit;
    winner = undefined;
    lastUpdate = Date.now();
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
    {#each redPositions as red (red.id)}
      <div class="red" style="left: {red.x}%; top: {red.y}%"></div>
    {/each}
    {#each bluePositions as blue (blue.id)}
      <div class="blue" style="left: {blue.x}%; top: {blue.y}%"></div>
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
