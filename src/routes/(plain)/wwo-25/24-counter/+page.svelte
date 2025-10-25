<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import { onMount } from "svelte";
  import moment from "moment";

  let itsOctober = $state(moment().get("months") === 9);
  let daysLeft = $state(31 - moment().date());

  function update() {
    itsOctober = moment().get("months") === 9;
    daysLeft = 31 - moment().date();
  }

  onMount(() => {
    setInterval(update, 1000);
  });
</script>

<MetaTags
  title="Days left in October"
  description="Weird Web October 2025 - 24. Counter"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Counter" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="counter-container">
    {#if itsOctober}
      <span class="days-label"
        >There are <span class="counter">{daysLeft}</span> Days left in October</span
      >
    {:else}
      <span class="no-october">It's not October anymore</span>
    {/if}
  </div>
</div>

<style lang="scss">
  :root {
    --c-background: #432818;
    --c-primary: #d75d5b;
    --c-secondary: #99582a;
    --c-text: #ffe6a7;
    --c-text-alt: #bb9457;
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

  .counter-container {
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 5em;

    .counter {
      color: var(--c-primary);
    }

    .days-label {
      color: var(--c-text);
    }
  }

  .back {
    position: absolute;
  }
</style>
