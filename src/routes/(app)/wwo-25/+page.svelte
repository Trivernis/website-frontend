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
  <Box>
    <a href="/wwo-25/01-transparency">1. Transparency</a>
    <br />
    <a href="/wwo-25/02-maps">2. Maps</a>
    <br />
    <a href="/wwo-25/03-scramble">3. Scramble</a>
  </Box>
  <div class="pad"></div>
</ContainerMedium>

<style lang="scss">
  .pad {
    margin: auto;
  }
</style>
