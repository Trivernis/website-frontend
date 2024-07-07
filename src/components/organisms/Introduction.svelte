<script>

    import Box from "../atoms/Box.svelte";
    import ContainerDualColumn from "../atoms/ContainerDualColumn.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
    import Thumbnail from "../molecules/Thumbnail.svelte";

</script>
<Box title="About">
  <ContainerDualColumn leftRatio="1" rightRatio="2">
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
      Heyyy. I'm a software developer and tinkerer from Germany. I do a lot of
      stuff so this website is an attempt in providing an overview.
      <br /><br />
      Right now it's very much a work in progress as I'm figuring out how to properly
      design a website (lol). But there's already some content to explore.
    </Paragraph>
  </ContainerDualColumn>
</Box>
