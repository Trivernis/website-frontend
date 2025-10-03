<script lang="ts">
  import { onMount } from "svelte";

  let positions: { x: number; y: number }[] = $state([]);

  let animationTimeout: number | undefined;

  let scrambling = $state(false);
  let time = 0;

  function reset() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
    scrambling = false;
    time = 0;
    positions = [];
    for (let i = 0; i < 400; i++) {
      const r = 7 * Math.random();
      const th = Math.random() * 2 * Math.PI;

      positions.push({
        x: r * Math.cos(th) + 50,
        y: r * Math.sin(th) + 50,
      });
    }
  }

  const speed = 6;

  function startScramble() {
    let scrambling = true;
    animationTimeout = setTimeout(() => {
      scrambling = false;
      scramble();
    }, 300);
  }

  function scramble() {
    if (scrambling) {
      return;
    }
    scrambling = true;
    let modified = false;

    for (const position of positions) {
      if (
        position.x >= 100 ||
        position.y >= 100 ||
        position.x <= 0 ||
        position.y <= 0
      ) {
        continue;
      }
      modified = true;
      let undecided = 0;

      if (position.x > 60) {
        position.x += Math.random() * speed;
      } else if (position.x < 40) {
        position.x -= Math.random() * speed;
      } else {
        position.x += (Math.random() * 2 - 1) * speed;
        undecided = 1;
      }

      if (position.y > 60) {
        position.y += Math.random() * speed;
      } else if (position.y < 40) {
        position.y -= Math.random() * speed;
      } else {
        position.y += (Math.random() * 2 - 1) * speed;
        undecided = 2;
      }

      if (undecided === 2) {
        if (Math.random() > 0.5) {
          position.y += (Math.random() * time - time / 2) * speed;
        } else {
          position.x += (Math.random() * time - time / 2) * speed;
        }
      }
    }
    if (modified) {
      time += 1;
      animationTimeout = setTimeout(() => {
        scrambling = false;
        scramble();
      }, 200);
    }
  }

  reset();

  let light: HTMLElement | undefined;

  onMount(() => {
    window.onmousemove = (event) => {
      light?.setAttribute(
        "style",
        `left: calc(${event.x}px - 10rem); top: calc(${event.y}px - 10rem)`,
      );
    };
  });
</script>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Scramble" />
</svelte:head>

<div class="page">
  <div class="back" onmouseout={reset} onblur={reset} role="application">
    <a href="./">Back</a>
  </div>
  <div
    class="critter-area"
    onmouseover={startScramble}
    onfocus={startScramble}
    role="application"
    aria-label="A field of critters"
  >
    {#if scrambling}<h1 class="title">Scramble!</h1>{/if}
    {#each positions as pos}
      <div class="critter" style={`top: ${pos.x}%; left: ${pos.y}%`}></div>
    {/each}
  </div>
  <div class="light" bind:this={light}></div>
</div>

<style lang="scss">
  .page {
    background-color: white;
    color: black;
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
  }

  .critter {
    display: block;
    position: absolute;
    height: 2px;
    width: 2px;
    background-color: black;
    border-radius: 100%;
    transition-duration: 200ms;
    transition-timing-function: linear;
    z-index: -100;
  }
  .critter-area {
    margin: auto;
    height: 10%;
    width: 10%;
    display: flex;
    .title {
      margin: auto;
      z-index: -100;
    }
  }
  .light {
    position: absolute;
    display: block;
    height: 20rem;
    width: 20rem;
    z-index: -99;
    outline: 5000px solid black;
    box-shadow: inset 0 0 5rem black;
    border-radius: 100%;
  }
</style>
