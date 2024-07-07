<script>
  import "$lib/vars.scss";
  import Box from "../components/atoms/Box.svelte";
  import Thumbnail from "../components/molecules/Thumbnail.svelte";
</script>

<h1>Welcome to my website</h1>
<Box title="About">
  <div class="flex-row text-and-image">
    <div class="text">
      <p>
        Heyyy. I'm a software developer and tinkerer from Germany. I do a lot of
        stuff so this website is an attempt in providing an overview.
      </p>
    </div>
    <div class="image">
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
  </div>
</Box>

<style lang="scss">
  .text-and-image {
    .text {
      display: box;
      width: 63%;
      margin-right: 3%;
    }

    .image {
      display: box;
      width: 34%;
    }
  }
</style>
