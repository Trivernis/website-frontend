<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags title="Filters" description="Weird Web October 2025 - 3. Filters" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Filters" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="page-container">
    <img
      src="/images/tokyo-rainbow-bridge.jpg"
      alt="The rainbow bridge in Tokyo on a cloudy day. Phootographed from Odaiba."
      class="test-image"
    />
  </div>
  <div class="page-container">
    <div class="filter filter-red"></div>
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
  .page-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    top: 0;
    left: 0;
  }
  .test-image {
    width: 45vw;
    height: auto;
    margin: auto;
  }
  .filter {
    height: 30vw;
    width: 30vw;
    border-radius: 100%;
    border: 15px solid black;
    outline: 5px dotted black;
    margin: auto;
  }
  .filter-red {
    backdrop-filter: grayscale(1) brightness(1.2);
    background: rgba(255, 0, 0, 0.5);
  }
</style>
