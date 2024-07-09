<script lang="ts">
  import type { PageData } from "./$types";
  import ErrorBox from "../../components/molecules/ErrorBox.svelte";
  import BlogPostTeaser from "../../components/organisms/BlogPostTeaser.svelte";
  import ContainerSlim from "../../components/atoms/ContainerSlim.svelte";

  type Props = {
    data: PageData;
  };

  const { data }: Props = $props();
</script>

<ContainerSlim>
  <h1>Blog</h1>

  {#each data.posts ?? [] as post}
    <BlogPostTeaser {post} />
  {/each}

  {#if data.error}
    <ErrorBox error={data.error} />
  {/if}
</ContainerSlim>
