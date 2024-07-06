<script lang="ts">
  import type { ImageMetadata } from "$lib";
  import "$lib/vars.scss";

  export let imageData: ImageMetadata | undefined = undefined;
</script>

<div class="thumbnail">
  {#if imageData}
    <picture>
      {#each imageData.formats as format}
        <source media={format.width? `(min-width: ${format.width * 2}px)` : "(min-width: 0px)"} type={format.mime} srcset={format.url} />
      {/each}
      <img src={imageData.formats[0]?.url} alt={imageData.altText} />
    </picture>
  {/if}
</div>

<style lang="scss">
  @layer component {
    .thumbnail {
      height: 100%;
      width: 100%;
    }
    picture {
      height: 100%;
      width: 100%;
      display: flex;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
</style>
