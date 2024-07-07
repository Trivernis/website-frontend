<script>
  import Box from "../atoms/Box.svelte";
  import Thumbnail from "../molecules/Thumbnail.svelte";
</script>

<Box title="About">
  <div class="about-content">
    <div class="about-image">
      <Thumbnail
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
    </div>
    <p>
      Heyyy. I'm a software developer and tinkerer from Germany. I do a lot of
      stuff so this website is an attempt in providing an overview.
      <br /><br />
      Right now it's very much a work in progress as I'm figuring out how to properly
      design a website (lol). But there's already some content to explore.
    </p>
  </div>
</Box>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .about-content {
      display: block;

      @include portrait {
        display: flex;
        flex-direction: column;
      }

      .about-image {
        margin-right: 1em;
        float: left;
        width: 30%;

        @include portrait {
          width: 100%;
          margin-right: 0;
          margin-bottom: 1em;
        }
      }

      p {
        margin: 0;
      }
    }
  }
</style>
