<script lang="ts">
  import { marked } from "marked";

  type Props = {
    markdown: string;
  };

  const { markdown }: Props = $props();

  const markdownHtml = marked(markdown);
</script>

<div class="markdown">
  {@html markdownHtml}
</div>

<style lang="scss">
  @layer component {
    .markdown {
      font-family: var(--font-readable);
      hyphens: auto;
      text-align: justify;
      cursor: text;
      font-size: 15pt;
    }
  }
</style>
