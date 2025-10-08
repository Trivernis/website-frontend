<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import dockerLogo from "$lib/assets/docker-mark-blue.png?enhanced";
  import foodContainer from "$lib/assets/food-container.jpg?enhanced";
  import paperContainer from "$lib/assets/paper-container.jpg?enhanced";

  const images = [dockerLogo, foodContainer, paperContainer];

  function selectImage() {
    const selectedImage = Math.floor(Math.random() * images.length);
    return images[selectedImage];
  }
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
  <h1 class="ctoa">Open the Container</h1>
  <div class="container">
    <div class="container-outline"></div>
    <div class="container-contents">
      <enhanced:img
        src={selectImage()}
        alt="The docker logo"
        class="sub"
        fetchpriority="high"
      />
      <span>I know it's not perfect but I was short on time.</span>
    </div>
    <div class="container-door-left"></div>
    <div class="container-door-right"></div>
  </div>
  <span class="sources">
    <a
      href="https://commons.wikimedia.org/wiki/File:Multi-Modal_Transport_Container.svg"
      >Container SVG</a
    >: algotruneman, CC0, via Wikimedia Commons<br />
    <a
      href="https://commons.wikimedia.org/wiki/File:2022-10-10_Altpapier-Container_unter_Starenschwarm_in_einer_Platane_in_der_Schillerstra%C3%9Fe_von_Hannover.jpg"
      >Paper Container</a
    >: Bernd Schwabe in Hannover,
    <a
      href="https://commons.wikimedia.org/wiki/File:Container,_aluminium_(AM_2014.56.30-2).jpg"
      >CC BY-SA 3.0</a
    >, via Wikimedia Commons<br />
    <a
      href="https://commons.wikimedia.org/wiki/File:Container,_aluminium_(AM_2014.56.30-2).jpg"
      >Food Container</a
    >: Auckland Museum,
    <a
      href="Auckland Museum, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons"
      >CC BY 4.0 , via Wikimedia Commons
    </a></span
  >
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
    flex-direction: column;
  }

  .ctoa {
    margin: auto;
    text-align: center;
    font-size: 5em;
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
      top: 6.5%;
      left: 6.5%;
      bottom: 9%;
      right: 7%;
      display: flex;
      flex-direction: column;

      picture {
        display: contents;
      }

      img {
        display: block;
        max-height: 80%;
        max-width: 80%;
        object-fit: contain;
        margin: auto;
      }
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

  .sources {
    color: #222;
    padding: 16px;
    font-size: 0.8em;
    a {
      color: #222;
    }
  }
</style>
