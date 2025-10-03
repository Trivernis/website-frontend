<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="You are here."
  description="Weird Web October 2025 - 2. Maps"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Maps" />
</svelte:head>

<div class="page">
  <div class="back">
    <a href="./">Back</a>
  </div>
  <div class="here">
    <div class="pointer"></div>
    <span>You are here</span>
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
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.05) 0.1em, transparent 0.1em),
      linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0.1em, transparent 0.1em);
    background-size: 100px 100px;
    background-repeat: repeat;
  }
  .back {
    position: fixed;
    margin: 1em;
    a {
      color: rgba(255, 0, 0, 0.5);
    }
  }
  .here {
    margin: auto;
    .pointer {
      background-color: red;
      height: 5em;
      width: 5em;
      border-radius: 100%;
      margin: auto;
    }
    span {
      font-size: 20pt;
      font-family: Lexend, Noto-Sans, Verdana, sans-serif;
    }
  }
</style>
