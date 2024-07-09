<script>
  import Box from "../components/atoms/Box.svelte";
  import ContainerDualColumn from "../components/atoms/ContainerDualColumn.svelte";
  import ContainerMedium from "../components/atoms/ContainerMedium.svelte";
  import Filler from "../components/molecules/Filler.svelte";
  import Introduction from "../components/organisms/Introduction.svelte";
  import Links from "../components/organisms/Links.svelte";
  import Socials from "../components/organisms/Socials.svelte";
</script>

<ContainerMedium>
  <h1>Welcome to my website</h1>

  <ContainerDualColumn leftRatio="2" rightRatio="1">
    {#snippet left()}
      <Introduction />
      <Socials />
      <Filler />
    {/snippet}
    {#snippet right()}
      <Links />
    {/snippet}
  </ContainerDualColumn>
  <ContainerDualColumn leftRatio="35%" rightRatio="65%">
    {#snippet left()}
      <Box title="Projects">
        <ul>
          <li>
            <a href="https://git.trivernis.net/trivernis/website-frontend"
              >This Website</a
            >
          </li>
          <li>
            <a href="https://git.trivernis.net/trivernis/silo">Silo</a>
          </li>
          <li>
            <a href="https://git.trivernis.net/trivernis/mediarepo">Mediarepo</a
            >
          </li>
          <li>
            <a href="https://git.trivernis.net/trivernis/snekdown">Snekdown</a>
          </li>
        </ul>
      </Box>
    {/snippet}
    {#snippet right()}
      <div></div>
    {/snippet}
  </ContainerDualColumn>
</ContainerMedium>

<style lang="scss">
  @layer page {
  }
</style>
