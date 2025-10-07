<script lang="typescript">
  import Box from "../../../components/atoms/Box.svelte";
  import ContainerMedium from "../../../components/atoms/ContainerMedium.svelte";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title="Weird Web October 2025"
  description="My contributions to the Weird Web October 2025"
/>

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
</svelte:head>

<ContainerMedium>
  <h1>Weird Web October 2025</h1>
  <p>
    These are my submissions to the <a href="https://weirdweboctober.website/"
      >Weird Web October 2025</a
    >:
  </p>
  <br />
  <Box margin="wide">
    <a href="/wwo-25/01-transparency">1. Transparency</a>
    <br />
    <a href="/wwo-25/02-maps">2. Maps</a>
    <br />
    <a href="/wwo-25/03-scramble">3. Scramble</a>
    <br />
    <a href="/wwo-25/04-filters">4. Filters</a>
    <br />
    <a href="/wwo-25/05-remix">5. Remix</a>
    <br />
    <a href="/wwo-25/06-solids">6. Solids</a>
    <br />
    <a href="/wwo-25/07-sub-optimal">7. Sub-optimal</a>
  </Box>
  <div class="pad"></div>
</ContainerMedium>

<style lang="scss">
  .pad {
    margin: auto;
  }
</style>
