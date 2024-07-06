<script lang="ts">
  import type { ImageMetadata } from "$lib";
  import "$lib/vars.scss";
  import { onMount } from "svelte";

  export let imageData: ImageMetadata;

  let alt: string | undefined = undefined;

  onMount(() => {
    alt =
      imageData.altText ??
      imageData.caption ??
      "Unfortunately theres no description for this image.";
  });
</script>

<div class="image">
  <figure>
    <picture>
      {#each imageData.formats as format}
        <source media={format.width? `(min-width: ${format.width}px)` : "(min-width: 0px)"} type={format.mime} srcset={format.url} />
      {/each}
      <img src={imageData.formats[0]?.url} {alt} />
    </picture>

    {#if imageData.caption}
      <figcaption>
        {imageData.caption}
      </figcaption>
    {/if}
  </figure>
</div>

<style lang="scss">
  @layer component {
    .image {
      border-radius: 10px;
      padding: 1em;
      background-color: var(--color-image-frame);

      figure {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0.5em;

        picture {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        figcaption {
          padding-top: 0.75em;
          font-size: 1.8em;
          display: block;
          width: 100%;
          color: var(--color-image-frame-text);
          font-family: Filo, Comic-Sans, serif;
          font-style: italic;
        }
      }
    }
  }
</style>
