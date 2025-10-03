<script lang="ts">
  let positions: { x: number; y: number }[] = $state([]);

  let animationTimeout: number | undefined;

  function reset() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
    scrambling = false;
    positions = [];
    for (let i = 0; i < 250; i++) {
      positions.push({
        x: Math.random() * 10 + 45,
        y: Math.random() * 10 + 45,
      });
    }
  }

  const speed = 3;
  let scrambling = $state(false);

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

      if (position.x > 53) {
        position.x += Math.random() * speed;
      } else if (position.x < 48) {
        position.x -= Math.random() * speed;
      } else {
        position.x += (Math.random() * 2 - 1) * speed;
      }
      if (position.y > 53) {
        position.y += Math.random() * speed;
      } else if (position.y < 48) {
        position.y -= Math.random() * speed;
      } else {
        position.y += (Math.random() * 2 - 1) * speed;
      }
    }
    if (modified) {
      animationTimeout = setTimeout(() => {
        scrambling = false;
        scramble();
      }, 100);
    }
  }

  reset();
</script>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Scramble" />
</svelte:head>

<div class="page">
  <div
    class="critter-area"
    onmouseover={scramble}
    onmouseout={reset}
    onblur={reset}
    onfocus={scramble}
    role="application"
  >
    {#if scrambling}<h1 class="title">Scramble!</h1>{/if}
    {#each positions as pos}
      <div class="critter" style={`top: ${pos.x}%; left: ${pos.y}%`}></div>
    {/each}
  </div>
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
    transition-duration: 0.1s;
    transition-timing-function: linear;
  }
  .critter-area {
    margin: auto;
    height: 30%;
    width: 30%;
    display: flex;
    .title {
      margin: auto;
      z-index: -100;
    }
  }
</style>
