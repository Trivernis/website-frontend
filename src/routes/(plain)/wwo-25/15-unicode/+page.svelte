<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  let char = $state(randomChar());

  function randomChar() {
    const emojiRanges: [number, number][] = [
      [0x2600, 0x26ff],
      [0x1f300, 0x1f5ff],
      [0x1f900, 0x1f9ff],
      [0x1fa70, 0x1faff],
    ];

    if (Math.random() <= 0.8) {
      const rangeId = Math.floor(Math.random() * emojiRanges.length);
      const range = emojiRanges[rangeId];

      return String.fromCharCode(
        range[0] + Math.floor(Math.random() * (range[1] - range[0])),
      );
    }

    let randomCode = 0;
    do {
      randomCode = 0x020 + Math.random() * 0xe01ef;
    } while (
      randomCode <= 0x1f ||
      randomCode === 0x20 ||
      randomCode === 0x7f ||
      (randomCode >= 0x80 && randomCode <= 0x9f)
    );
    return String.fromCharCode(Math.floor(randomCode));
  }

  setInterval(() => {
    char = randomChar();
  }, 100);
</script>

<MetaTags title="Unicode" description="Weird Web October 2025 - 15. Unicode" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Unicode" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>

  <span id="random-char">{char}</span>
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

  #random-char {
    margin: auto;
    text-align: center;
    font-size: 5em;
  }

  .back {
    position: absolute;
  }
</style>
