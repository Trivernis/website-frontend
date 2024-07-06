<script>
  import "$lib/vars.scss";
  import Box from "../components/atoms/Box.svelte";
  import Image from "../components/molecules/Image.svelte";
</script>

<h1>Welcome to my website</h1>
<Box>
  <div class="flex-row text-and-image">
    <div class="text">
      <p>
        Welcome to my website. I'm a software developer and tinkerer from
        Germany. I do a lot of stuff so this website is an attempt in providing
        an overview.
      </p>
    </div>
    <div class="image">
      <Image
        border={false}
        sources={[
          {
            src: "/images/profile.jpg",
            type: "image/jpeg",
          },
        ]}
      ></Image>
    </div>
  </div>
</Box>

<style lang="scss">
  .text-and-image {
    .text {
      display: box;
      width: 63%;
      margin-right: 3%
    }

    .image {
      display: box;
      width: 34%;
    }
  }
</style>
