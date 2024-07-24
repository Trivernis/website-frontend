<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children?: Snippet;
    onclick?: (...args: any) => void;
    color?: string;
    pageBackground?: string;
    label?: string;
  };

  const {
    label,
    children,
    onclick,
    color = "primary",
    pageBackground = "background",
  }: Props = $props();
</script>

<button
  class="button"
  {onclick}
  style={`--button-color: var(--color-${color}); --button-page-background: var(--color-${pageBackground})`}
>
  <span class="button-label">{label}</span>
  {#if children}
    {@render children()}
  {/if}
</button>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .button {
      @include lighten-color(--button-border-color, var(--button-color));
      color: transparent;
      border: none !important;
      background: var(--button-color) !important;
      border-radius: 7.5px;
      padding: 0.25em 0.5em;
      color: black;
      mix-blend-mode: screen;

      box-shadow: 0 0 10px var(--button-color);
      text-shadow: inset 0 0 10px var(--button-color);
      transition-duration: 0.25s;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px var(--button-color);
        color: #222;
      }
    }

    .button-label {
      font-size: 1.5em;
      font-weight: bold;
    }
  }
</style>
