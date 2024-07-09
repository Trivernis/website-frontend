<script lang="ts">
  import "$lib/vars.scss";
  import type { BlogPostTeaser } from "$lib/cms/blog";
  import Box from "../atoms/Box.svelte";
  import { formatDateAbsolute, formatDateRelative } from "$lib";
  import Thumbnail from "../molecules/Thumbnail.svelte";

  type Props = {
    post: BlogPostTeaser;
  };

  const { post }: Props = $props();
</script>

<a class="unstyled-link" href={`/blog/${post.attributes.slug}`}>
  <Box>
    {@const collection = post.attributes.collection.data?.attributes}
    {@const author = post.attributes.author.data?.attributes}
    {@const tags = post.attributes.tags.data?.map((d) => d?.attributes)}
    {@const teaserImage = post.attributes.teaserImage.data?.attributes}
    {@const imageData = teaserImage && {
      altText: teaserImage.alternativeText,
      formats: [teaserImage.formats.small, teaserImage.formats.thumbnail],
    }}

    <div
      class="blog-post-teaser"
      class:image-teaser={post.attributes.teaserImage?.data}
    >
      <div class="teaser-text">
        {#if collection}
          <h5 class="collection-title">
            in
            {collection.name}
          </h5>
        {/if}
        <h3>{post.attributes.title}</h3>
        <span>by {author?.name ?? "Anonymous Mouse"}</span>,
        <span title={formatDateAbsolute(post.attributes.publishedAt)}
          >{formatDateRelative(post.attributes.publishedAt)}</span
        >
        {#if tags.length > 0}
          <div class="tag-padding"></div>
          <div class="post-tags">
            {#each tags as tag}
              <span class="tag">{tag.name}</span>
            {/each}
          </div>
        {/if}
      </div>
      {#if imageData}
        <div class="teaser-image">
          <Thumbnail {imageData} />
        </div>
      {/if}
    </div>
  </Box>
</a>

<style lang="scss">
  @layer component {
    .blog-post-teaser {
      position: relative;
      .collection-title {
        margin: 0;
        margin-top: 0.5em;
      }
      .tag-padding {
        height: 1.5em;
      }
      .post-tags {
        position: absolute;
        bottom: 0;

        .tag {
          margin-right: 0.5em;
        }
      }
    }

    .image-teaser {
      display: flex;
      flex-direction: row;

      .teaser-text {
        display: block;
        width: 65%;
      }

      .teaser-image {
        display: block;
        width: 35%;
      }
    }
  }
</style>
