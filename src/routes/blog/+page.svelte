<script lang="ts">
  import type { PageData } from "./$types";
  import Error from "../../components/molecules/Error.svelte";
  import BlogPostTeaser from "../../components/organisms/BlogPostTeaser.svelte";
  import ContainerSlim from "../../components/atoms/ContainerSlim.svelte";

  export let data: PageData;
</script>

<ContainerSlim>
  <h1>Blog</h1>

  {#each data.posts ?? [] as post}
    <BlogPostTeaser {post} />
  {/each}

  {#if data.error}
    <Error error={data.error} />
  {/if}
</ContainerSlim>
