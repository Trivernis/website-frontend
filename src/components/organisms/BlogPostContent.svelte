<script lang="ts">
  import type { BlogPostContentEntry } from "$lib/cms/blog";
  import "$lib/vars.scss";
  import Box from "../atoms/Box.svelte";
  import Markdown from "../molecules/Markdown.svelte";
  import Image from "../molecules/Image.svelte";
  import Infobox from "../molecules/Infobox.svelte";

  type Props = {
    content: BlogPostContentEntry;
  };

  const { content }: Props = $props();
</script>

<div class="post-content">
  {#if content.__component === "content.paragraph" || content.__component === "content.text-markdown"}
    <Box>
      <Markdown markdown={content.value} />
    </Box>
  {:else if content.__component === "content.infobox"}
    <Infobox title={content.title}>
      <Markdown markdown={content.value} />
    </Infobox>
  {:else if content.__component === "content.image"}
    {@const imageData = content.value.data.attributes}
    <Image
      imageData={{
        caption: imageData.caption,
        altText: imageData.alternativeText,
        formats: Object.values(imageData.formats),
      }}
    />
  {/if}
</div>

<style lang="scss">
  @layer component {
    .post-content {
      margin: 1em 0;
    }
  }
</style>
