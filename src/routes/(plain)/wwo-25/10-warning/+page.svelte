<script lang="ts">
  import { onMount } from "svelte";
  import { MetaTags } from "svelte-meta-tags";
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
  <div class="ssl-error">
    <div class="warning-and-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="yellow"
        fill-opacity="context-fill-opacity"
        class="warning-symbol"
      >
        <path
          d="m14.875 12.037-5.497-10C8.997 1.346 8.311 1 7.625 1s-1.372.346-1.752 1.037l-5.497 10C-.358 13.37.607 15 2.128 15l10.995 0c1.52 0 2.485-1.63 1.752-2.963zM8.25 11.75 8 12l-.75 0-.25-.25L7 11l.25-.25.75 0 .25.25 0 .75zm0-2.688a.625.625 0 0 1-1.25 0l0-3.437a.625.625 0 0 1 1.25 0l0 3.437z"
        />
      </svg>
      <h1 class="warning">Warning</h1>
    </div>
    <h1>Did Not Connect: Potential Security Issue</h1>
    <p>
      The browser detected a potential security threat and did not continue to
      trivernis.net because this website requires a secure connection.
    </p>
  </div>
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
    padding: 16px;
  }

  .back {
    position: absolute;
  }

  .ssl-error {
    margin: auto;
  }
  .warning-and-svg {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1em;

    .warning-symbol {
      height: 4em;
      width: 4em;
    }

    .warning {
      width: 100%;
      margin: auto;
      font-size: 3em;
    }
  }
</style>
