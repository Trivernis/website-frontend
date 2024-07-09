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
    <div class="teaser-container">
      <BlogPostTeaser {post} />
    </div>
  {/each}

  {#if data.error}
    <ErrorBox error={data.error} />
  {/if}
</ContainerSlim>

<style lang="scss">
  @layer page {
    .teaser-container {
      margin: 2em 0;
    }
  }
</style>
