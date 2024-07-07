<script lang="ts">
  import { page } from "$app/stores";
  import "$lib/vars.scss";
  import Box from "../atoms/Box.svelte";
  import Navigation from "../molecules/Navigation.svelte";
  import PageTitle from "../molecules/PageTitle.svelte";

  let pageTitle = "Trivernis";
  let pageSecondaryTitle: string | undefined = undefined;

  page.subscribe((pageData) => {
    const path = pageData.url.pathname;

    if (path.startsWith("/blog")) {
      pageTitle = "Blog";
      pageSecondaryTitle = "Trivernis";
    } else {
      pageTitle = "Trivernis";
      pageSecondaryTitle = undefined;
    }
  });
</script>

<div class="header">
  <PageTitle title={pageTitle} secondaryTitle={pageSecondaryTitle}/>
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
