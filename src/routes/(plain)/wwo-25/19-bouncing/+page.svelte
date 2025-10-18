<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  let asking = $state(true);
  import fresh from "$lib/assets/tiny-shrimp.jpg?enhanced";
  import { onMount } from "svelte";

  type Ball = {
    x: number;
    y: number;
    vx: number;
    vy: number;
  };

  let balls: Ball[] = $state([
    { x: 10, y: 50, vx: 0, vy: 0 },
    { x: 22.5, y: 70, vx: 0, vy: 0 },
    { x: 35, y: 20, vx: 0, vy: 0 },
    { x: 47.5, y: 47.5, vx: 0, vy: 0 },
    { x: 55, y: 1, vx: 0, vy: 0 },
    { x: 67.5, y: 80, vx: 0, vy: 0 },
    { x: 90, y: 30, vx: 0, vy: 0 },
  ]);

  function tickBall(ball: Ball, delta: number) {
    if (ball.y < 95 && ball.y > 0) {
      //gravity
      ball.vy += 9.81 * delta;
      ball.vy -= ball.vy * 0.001;
    } else if (ball.y <= 0 || ball.y >= 95) {
      ball.vy = -ball.vy;
      ball.y = Math.max(Math.min(ball.y, 95), 0);
    }

    ball.y += ball.vy * delta;

    if (ball.y >= 95) {
      if (ball.vy > 10) {
        console.log(ball);
        ball.y = 96;
      }
    } else if (ball.y <= 0) {
      ball.y = 0;
    }

    return ball;
  }

  function tick(delta: number) {
    const newBalls = [];
    for (const ball of balls) {
      newBalls.push(tickBall(ball, delta));
    }
    balls = newBalls;
  }

  onMount(() => {
    let lastUpdate = Date.now();
    setInterval(() => {
      tick((Date.now() - lastUpdate) / 1000);
      lastUpdate = Date.now();
    }, 1000 / 30);
  });
</script>

<MetaTags
  title="Bouncing balls"
  description="Weird Web October 2025 - 19. Bouncing"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Bouncing" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="world">
    {#each balls as ball}
      <div
        class="ball"
        data-debug={(5 - Math.max(ball.y - 95, 0)) / 5}
        style="top: {ball.y}%; left: {ball.x}%; transform: scaleY({(2 -
          Math.max(ball.y - 95, 0)) /
          2})"
      ></div>
    {/each}
  </div>
</div>

<style lang="scss">
  :root {
    --c-background: #002642;
    --c-primary: #f5005e;
    --c-secondary: #e59500;
    --c-text: #e5dada;
    --c-text-dark: #02040f;
  }
  .page {
    font-size: 10pt;
    background: var(--c-background);
    color: var(--c-text);
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

  .world {
    position: relative;
    height: min(90vh, 90vw);
    width: min(90vh, 90vw);
    margin: auto;
    outline: 10px solid var(--c-secondary);
  }

  .ball {
    position: absolute;
    height: 5%;
    width: 5%;
    display: block;
    background-color: var(--c-primary);
    border-radius: 100%;
    transition-duration: 100ms;

    &.deform {
      transform: scaleY(0);
    }
  }

  .back {
    position: absolute;
  }
</style>
