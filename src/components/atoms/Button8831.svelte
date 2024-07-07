<script lang="ts">
  export let src: string;
  export let alt: string = "88x31 Button";
  export let href: string | undefined = undefined;
</script>

<div class="button-88-31">
  {#if href}
    <a class="unstyled-link" {href} target="_blank">
      <img {src} {alt} loading="lazy" />
    </a>
  {:else}
    <img {src} {alt} loading="lazy" />
  {/if}
</div>

<style lang="scss">
  @layer component {
    .button-88-31 {
        margin: 2px;
      height: 31px;
      width: 88px;
      padding: 0;
    }
  }
</style>
