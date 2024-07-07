<script>
  import Box from "../components/atoms/Box.svelte";
  import ContainerDualColumn from "../components/atoms/ContainerDualColumn.svelte";
  import ContainerMedium from "../components/atoms/ContainerMedium.svelte";
  import Introduction from "../components/organisms/Introduction.svelte";
  import Links from "../components/organisms/Links.svelte";
  import Socials from "../components/organisms/Socials.svelte";
</script>

<ContainerMedium>
  <h1>Welcome to my website</h1>

  <ContainerDualColumn leftWidth="65%" rightWidth="35%">
    <div slot="left">
      <Introduction />
      <Socials />
    </div>
    <Links slot="right" />
  </ContainerDualColumn>
  <ContainerDualColumn leftWidth="35%" rightWidth="65%">
    <Box slot="left" title="Projects">
      <ul>
        <li>
          <a href="https://git.trivernis.net/trivernis/website-frontend">This Website</a>
        </li>
        <li>
          <a href="https://git.trivernis.net/trivernis/silo">Silo</a>
        </li>
        <li>
          <a href="https://git.trivernis.net/trivernis/mediarepo">Mediarepo</a>
        </li>
        <li>
          <a href="https://git.trivernis.net/trivernis/snekdown">Snekdown</a>
        </li>
      </ul>
    </Box>
  </ContainerDualColumn>
</ContainerMedium>
