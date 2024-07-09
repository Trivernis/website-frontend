<script lang="ts">
  import { marked } from "marked";

  type Props = {
    markdown: string;
  };

  const { markdown }: Props = $props();

  const markdownHtml = marked(markdown);
</script>

{@html markdownHtml}
