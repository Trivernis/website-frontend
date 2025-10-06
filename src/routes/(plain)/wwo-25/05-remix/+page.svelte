<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  let label = $state("Remix! Remix! Remix!");

  function remix(n: number) {
    const pos1 = Math.floor(Math.random() * label.length);
    let pos2 = Math.floor(Math.random() * label.length);

    if (pos1 === pos2) {
      pos2 = (pos2 + 1) % label.length;
    }

    let newLabel = "";

    for (let i = 0; i < label.length; i++) {
      if (i === pos1) {
        newLabel += label.charAt(pos2);
      } else if (i === pos2) {
        newLabel += label.charAt(pos1);
      } else {
        newLabel += label.charAt(i);
      }
    }
    label = newLabel;

    if (n > 0) {
      setTimeout(() => remix(n - 1), 10);
    }
  }
</script>

<MetaTags
  title="Remix! Remix! Remix!"
  description="Weird Web October 2025 - 5. Remix"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Remix" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <button class="remix" onclick={() => remix(100)}><pre>{label}</pre></button>
</div>

<style lang="scss">
  .page {
    font-size: 10pt;
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
  }
  .remix {
    font-size: 5em;
    width: auto;
    margin: auto;
    display: block;
    font-family: Fira-Code, "Courier New", Courier, monospace, monospace;
    cursor: pointer;
    background: #ff20aa;
    border: none;
    border-radius: 50px;
    padding: 0 1em;
    transition-duration: 0.2s;
    box-shadow: 10px 10px 0 white;
    transform: translate(-5px, -5px);

    &:hover {
      background: #ff30ca;
    }
    &:active {
      background: #cc30ca;
      box-shadow: none;
      transform: translate(5px, 5px);
    }
  }

  .back {
    position: absolute;
  }

  @media (max-width: 1000px) {
    .remix {
      font-size: 3em;
      border-radius: 20px;
    }
  }
  @media (max-width: 650px) {
    .remix {
      font-size: 2em;
      border-radius: 10px;
    }
  }
</style>
