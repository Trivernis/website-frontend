<script lang="ts">
  import "$lib/vars.scss";
  import Box from "../atoms/Box.svelte";
  import Navigation from "../molecules/Navigation.svelte";
  import PageTitle from "../molecules/PageTitle.svelte";

</script>

<div class="header">
  <PageTitle/>
  <Box color="purple" margin="slim">
    <Navigation />
  </Box>
</div>

<style lang="scss">
  @layer component {
    .header {
      height: auto;
      min-height: 3em;
      display: block;
      width: 100%;
      padding: 1em;
      padding-top: 0;
    }
  }
</style>
