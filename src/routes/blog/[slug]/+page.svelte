<script lang="ts">
  import Box from "../../../components/atoms/Box.svelte";
import Error from "../../../components/molecules/Error.svelte";
    import BlogPostContent from "../../../components/organisms/BlogPostContent.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.post}
  <Box>
    {@const post = data.post}
    {@const author = data.post.attributes.author.data?.attributes}

    <h1>{post.attributes.title}</h1>
    <h3>by {author?.name}</h3>

    {#each post.attributes.content as contentEntry}
      <BlogPostContent content={contentEntry}/>
    {/each}
  </Box>
  {:else}
  <Error error={{message: "Could not find the post"}} />
{/if}

{#if data.error}
  <Error error={data.error} />
{/if}
