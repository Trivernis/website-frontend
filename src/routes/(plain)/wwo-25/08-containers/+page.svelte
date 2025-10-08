<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Containers"
  description="Weird Web October 2025 - 8. Containers"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Containers" />
</svelte:head>

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="container">
    <div class="container-outline"></div>
    <div class="container-contents"></div>
    <div class="container-door-left"></div>
    <div class="container-door-right"></div>
  </div>
</div>

<style lang="scss">
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
  }

  .container {
    height: 90%;
    width: auto;
    display: block;
    aspect-ratio: 270 / 319;
    margin: auto;
    position: relative;

    &:hover {
      .container-door-right {
        transform: rotateY(180deg) translateX(25%);
        transform-origin: 100% 0;
      }
      .container-door-left {
        transform: rotateY(-180deg) translateX(-21%);
        transform-origin: 0 0;
      }
    }

    .container-outline,
    .container-contents,
    .container-door-left,
    .container-door-right {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-size: cover;
      transition-duration: 0.25s;
      transition-timing-function: ease-in;
    }

    .container-outline {
      background-image: url("/images/shipping-container-open.svg");
    }

    .container-door-left {
      background-image: url("/images/shipping-container-doors.svg");
      background-position: -0.25% 0%;
      width: 50%;
      right: 50%;
    }
    .container-door-right {
      background-image: url("/images/shipping-container-doors.svg");
      background-position: 100%;
      width: 50%;
      left: 50%;
    }

    .container-contents {
      background-color: red;
      top: 6.5%;
      left: 6.5%;
      bottom: 9%;
      right: 7%;
    }
  }

  @media (aspect-ratio < 270 / 319) {
    .container {
      width: 90%;
      height: auto;
    }
  }

  .back {
    position: absolute;
  }
</style>
