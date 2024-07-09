<script lang="ts">
type Props = {
	src: string;
	alt?: string;
	href?: string;
};

const { src, alt = "88x31 Button", href }: Props = $props();
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
      overflow: hidden;
    }
  }
</style>
