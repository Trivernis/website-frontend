<script lang="ts">
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";

  function overlayPress() {
    alert("WARNING: There is nothing here!");
  }
</script>

<MetaTags
  title="Did Not Connect: Potential Security Issue"
  description="Weird Web October 2025 - 10. Warning"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Warning" />
</svelte:head>

<div class="page">
  <iframe
    class="ssl-error"
    src="https://ssl-error.trivernis.net"
    title="SSL-Error"
  >
  </iframe>
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div class="ssl-overlay" role="application" onmousedown={overlayPress}></div>
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
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
  }

  .back {
    position: absolute;
  }

  .ssl-error {
    height: 100%;
    width: 100%;
  }

  .ssl-overlay {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
</style>
