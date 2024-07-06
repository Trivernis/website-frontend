<script lang="ts">
  import type { BlogPostContentEntry } from "$lib/cms/blog";
  import "$lib/vars.scss";
  import Box from "../atoms/Box.svelte";
  import Markdown from "../atoms/Markdown.svelte";
  import Image from "../molecules/Image.svelte";

  export let content: BlogPostContentEntry;
</script>

<div class="post-content">
  {#if content.__component === "content.text-markdown"}
    {#if content.type === "paragraph"}
      <Markdown markdown={content.value} />
    {:else if content.type === "infobox"}
      <Box color="cyan">
        <b class="info-label">Info</b>
        <Markdown markdown={content.value} />
      </Box>
    {/if}
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
    .info-label {
      color: var(--color-cyan);
    }
  }
</style>
