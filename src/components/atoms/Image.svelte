<script lang="ts">
  type Props = {
    src: string;
    title?: string;
    text?: string;
  };

  const { src, title, text }: Props = $props();
</script>

<img class="image" {src} {title} alt={text} />

<style lang="scss">
  @layer component {
    .image {
      max-width: 35%;
    }
  }
</style>
