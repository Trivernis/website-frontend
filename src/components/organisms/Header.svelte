<script>
  import "$lib/vars.scss";
    import Box from "../atoms/Box.svelte";
    import Navigation from "../molecules/Navigation.svelte";
</script>

<div class="header">
  <Box color="purple" margin="slim">
    <Navigation/>
  </Box>
</div>

<style lang="scss">
  @layer component {
    .header {
      height: auto;
      min-height: 3em;
      max-height: 10em;
      display: block;
      width: 100%;
      padding: 1em;
    }    
  } 
</style>
