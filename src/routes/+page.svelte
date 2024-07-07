<script>
  import ContainerDualColumn from "../components/atoms/ContainerDualColumn.svelte";
  import ContainerMedium from "../components/atoms/ContainerMedium.svelte";
  import Introduction from "../components/organisms/Introduction.svelte";
  import Links from "../components/organisms/Links.svelte";
  import Socials from "../components/organisms/Socials.svelte";
</script>

<ContainerMedium>
  <h1>Welcome to my website</h1>

  <ContainerDualColumn leftWidth="65%" rightWidth="35%">
    <Introduction slot="left" />
    <div slot="right">
      <Socials />
      <Links />
    </div>
  </ContainerDualColumn>
</ContainerMedium>
