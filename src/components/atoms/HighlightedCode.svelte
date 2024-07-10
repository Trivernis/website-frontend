<script lang="ts">
  import hljs from "highlight.js";
  import "highlight.js/styles/night-owl.css";

  type Props = {
    language?: string;
    code: string;
    lineNumbers?: boolean;
  };

  const { language, code, lineNumbers = true }: Props = $props();

  function addLineNumbers(rawHtml: string) {
    if (!lineNumbers) {
      return rawHtml;
    }
    return rawHtml
      .split("\n")
      .map((line, index) => {
        return `<span class="line-number">${index + 1}</span>${line}`;
      })
      .join("\n");
  }

  const html: string = $derived.by(() => {
    if (language) {
      return addLineNumbers(hljs.highlight(code, { language }).value);
    }
    return addLineNumbers(hljs.highlightAuto(code).value);
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
      background-color: var(--color-background-light);
      padding: 0.25em;
      border-radius: 5px;
      user-select: contain;

      :global(.line-number) {
        color: var(--color-foreground-hint);
        margin-right: 0.75em;
        user-select: none;
      }
    }
  }
</style>
