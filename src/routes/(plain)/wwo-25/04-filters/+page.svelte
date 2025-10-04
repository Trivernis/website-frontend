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
  <img
    src="/images/tokyo-rainbow-bridge.jpg"
    alt="The rainbow bridge in Tokyo on a cloudy day. Phootographed from Odaiba."
    class="test-image"
  />
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
  .test-image {
    width: 30vw;
    height: auto;
    margin: auto;
  }
</style>
