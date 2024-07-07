<script>
  import "$lib/vars.scss";
  import Box from "../components/atoms/Box.svelte";
  import ContainerDualColumn from "../components/atoms/ContainerDualColumn.svelte";
  import ContainerMedium from "../components/atoms/ContainerMedium.svelte";
  import Paragraph from "../components/atoms/Paragraph.svelte";
  import Thumbnail from "../components/molecules/Thumbnail.svelte";
</script>

<ContainerMedium>
  <h1>Welcome to my website</h1>
  <ContainerDualColumn leftWidth="65%" rightWidth="35%">
    <Box slot="left" title="About">
      <ContainerDualColumn leftWidth="34%" rightWidth="63%">
        <Thumbnail
          slot="left"
          imageData={{
            altText:
              "A picture of Ferris, the Rust mascot. An orange crab plushie.",
            formats: [
              {
                name: "original",
                mime: "image/jpeg",
                url: "/images/profile.jpg",
              },
            ],
          }}
        />
        <Paragraph slot="right">
          Heyyy. I'm a software developer and tinkerer from Germany. I do a lot
          of stuff so this website is an attempt in providing an overview.
          <br /><br />
          Right now it's very much a work in progress as I'm figuring out how to
          properly design a website (lol). But there's already some content to explore.
        </Paragraph>
      </ContainerDualColumn>
    </Box>

    <div slot="right">
      <Box title="Socials" color="green">
        Fediverse: <code>@trivernis@social.funkyfish.cool</code>
        <br>
        Matrix: <code>@trivernis:trivernis.net</code>
        Email: <code>me@trivernis.net</code>
      </Box>
      <Box title="Links" color="cyan">
        <h3>My other Websites</h3>
        <ul>
          <li>
            <a href="https://plantwiki.trivernis.net">Plantwiki</a>
            (<a href="https://plantwiki.trivernis.dev">Dev</a>)
          </li>
          <li>
            <a href="https://no-chromium.org">No Chromium</a>
          </li>
        </ul>

        <h3>Me on other Platforms</h3>
        <ul>
          <li>
            <a href="https://github.com/trivernis">GitHub</a>
          </li>
          <li>
            <a href="https://codeberg.org/trivernis">Codeberg</a>
          </li>
        </ul>

        <h3>My selfhosted stuff</h3>
        <ul>
          <li>
            <a href="https://git.trivernis.net">Forgejo</a>
          </li>
          <li>
            <a href="https://social.funkyfish.cool">Sharkey (Fediverse)</a>
          </li>
          <li>
            <a href="https://lychee.trivernis.net">Lychee</a>
          </li>
          <li>
            <a href="https://search.trivernis.net">SearchXNG</a>
          </li>
        </ul>
      </Box>
    </div>
  </ContainerDualColumn>
</ContainerMedium>
