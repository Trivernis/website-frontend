<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Tables"
  description="Weird Web October 2025 - 28. Tables"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Tables" />
</svelte:head>

<div class="page" role="application">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <table>
    <thead>
      <tr>
        <td>Let</td>
        <td>There</td>
        <td>Be</td>
        <td>Columns</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>This is a cell</td>
        <td>This one as well</td>
        <td>This one might be</td>
        <td>For sure this one</td>
      </tr>
      <tr>
        <td>Can't complain</td>
        <td>We're having more cells</td>
        <td>For breakfast</td>
        <td>DAAATA</td>
        <td>What happened here?</td>
      </tr>
      <tr>
        <td>Oops</td>
      </tr>
      <tr>
        <td></td>
        <td>????</td>
        <td>___</td>
      </tr>
      <tr>
        <td>jlwejtwetj</td>
        <td>sldkfjslkd</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>huh</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

<style lang="scss">
  :root {
    --c-background: light-dark(white, black);
    --c-primary: light-dark(black, white);
    --c-secondary: light-dark(black, white);
    --c-text: light-dark(black, white);
    --c-text-alt: light-dark(white, black);
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

  table {
    margin-top: 2em;
  }

  marquee {
    font-size: 5em;
    color: var(--c-primary);
  }

  td {
    border: 1px solid black;
  }

  .back {
    position: absolute;
  }
</style>
