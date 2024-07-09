<script lang="ts">
  import hljs from "highlight.js";
  import "highlight.js/styles/night-owl.css";

  type Props = {
    language?: string;
    code: string;
  };

  const { language, code }: Props = $props();

  const html: string = $derived.by(() => {
    if (language) {
      return hljs.highlight(code, { language }).value;
    }
    return hljs.highlightAuto(code).value;
  });
</script>

<pre class="code">
{@html html}
</pre>

<style lang="scss">
  @layer component {
    .code {
      margin: 0;
      font-family: var(--font-monospace);
    }
  }
</style>
