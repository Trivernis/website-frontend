<script lang="ts">
  import "$lib/vars.scss";
  import { onMount } from "svelte";

  export let sources: {
    src: string;
    type: string;
  }[];

  export let caption: string | undefined = undefined;
  export let alt: string | undefined = undefined;
  export let border = true;

  onMount(() => {
    alt =
      alt ?? caption ?? "Unfortunately theres no description for this image.";
  });
</script>

<div class="image" class:border={border}>
  <figure>
    <picture>
      {#each sources as source}
        <source type={source.type} srcset={source.src} />
      {/each}
      <img src={sources[0]?.src} {alt} class:rounded={!border} />
    </picture>

    {#if caption}
      <figcaption>
        {caption}
      </figcaption>
    {/if}
  </figure>
</div>

<style lang="scss">
  @layer component {
    .image {
      &.border {
        border-radius: 10px;
        padding: 1em;
        background-color: var(--color-image-frame);

        figure {
          margin: 0.5em;          
        }
      }

      figure {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;

        picture {
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.rounded {
              border-radius: 10px;
            }
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
