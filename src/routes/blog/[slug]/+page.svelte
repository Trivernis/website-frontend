<script lang="ts">
  import { formatDateRelative } from "$lib";
  import Box from "../../../components/atoms/Box.svelte";
  import ErrorBox from "../../../components/molecules/ErrorBox.svelte";
  import Thumbnail from "../../../components/molecules/Thumbnail.svelte";
  import BlogPostContent from "../../../components/organisms/BlogPostContent.svelte";
  import type { PageData } from "./$types";
  import ContainerSlim from "../../../components/atoms/ContainerSlim.svelte";

  type Props = {
    data: PageData;
  };

  const { data }: Props = $props();
</script>

<ContainerSlim>
  {#if data.post}
    {@const post = data.post}
    {@const author = data.post.attributes.author.data?.attributes}
    {@const teaserImage = data.post.attributes.teaserImage.data?.attributes}
    {@const collection = data.post.attributes.collection.data?.attributes}

    <div class="blog-entry" lang={post.attributes.locale}>
      <div class="blog-entry-head">
        <Box>
          <div class="head-text">
            <h1>{post.attributes.title}</h1>
            <h3>by {author?.name ?? "Anonymous Mouse"}</h3>
            {#if collection}
              <h4>
                in <a href={`/blog/collection/${collection.slug}`}
                  >{collection?.name}</a
                >
              </h4>
            {/if}
            <span>{formatDateRelative(post.attributes.publishedAt)}</span>
          </div>
          {#if post.attributes.teaserImage.data}
            <div class="head-thumbnail">
              <Thumbnail
                imageData={{
                  altText: teaserImage.alternativeText,
                  formats: Object.values(teaserImage.formats),
                }}
              />
            </div>
          {/if}
        </Box>
      </div>
      {#each post.attributes.content as contentEntry}
        <BlogPostContent content={contentEntry} />
      {/each}
    </div>
  {:else if !data.error}
    <ErrorBox error={{ message: "Could not find the post" }} />
  {/if}

  {#if data.error}
    <ErrorBox error={data.error} />
  {/if}
</ContainerSlim>

<style lang="scss">
  .blog-entry-head {
    position: relative;
    margin: 0;
    margin-bottom: 1em;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;

    .head-text {
      width: 100%;
      z-index: 10;
      padding: 1em;
      h1 {
        margin-top: 0;
      }
      &* {
        text-align: center;
      }
    }
    .head-thumbnail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
    }
  }
</style>
