<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    color?: string;
    title?: string;
    titleElement?: Snippet;
    margin?: "slim" | "medium" | "wide";
    children: Snippet;
  };

  const {
    color = "primary",
    title,
    titleElement,
    margin = "medium",
    children,
  }: Props = $props();
</script>

<div
  class={["box", `margin-${margin}`].join(" ")}
  class:with-title={title || titleElement}
  style={`--box-color: var(--color-${color})`}
>
  {#if title || titleElement}
    <div class="box-title">
      <div class="border-left"></div>
      <div class="left-end-cap"></div>
      <span class="title-label">
        {#if title}{title}{:else if titleElement}{@render titleElement()}{/if}
      </span>
      <div class="right-end-cap"></div>
      <div class="border-right"></div>
    </div>
  {/if}
  {@render children()}
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .box {
      position: relative;
      @include lighten-color(--box-border-color, var(--box-color));
      --box-text-color: color-mix(
        in srgb,
        var(--box-color),
        var(--color-foreground) 90%
      );
      --color-context: var(--box-color);

      border: 5px solid var(--box-border-color);
      border-radius: 10px;
      margin: auto;
      height: auto;
      width: 100%;
      box-shadow:
        0 0 20px var(--box-color),
        inset 0 0 20px var(--box-color);

      &.with-title {
        border-top: transparent;
        margin-top: 2em;

        &.margin-slim {
          padding-top: 1.25em;
        }
        &.margin-medium {
          padding-top: 1.75em;
        }
        &.margin-wide {
          padding-top: 2.25em;
        }
      }

      &.margin-slim {
        padding: 1em;
      }
      &.margin-medium {
        padding: 1.5em;
      }
      &.margin-wide {
        padding: 2em;
      }

      .box-title {
        display: flex;
        width: calc(100% + 10px);
        flex-direction: row;

        position: absolute;
        top: 0;
        left: -5px;
        height: 1.5em;
        font-size: 1.5em;
        border-radius: 10px;

        .title-label {
          transform: translateY(-0.9em);
          padding: 0.25em;
          border-radius: 10%;
          color: var(--box-text-color);
          text-shadow: 0 0 20px var(--box-color);
          z-index: 99;
          white-space: nowrap;
          display: inline;
        }

        .border-left {
          width: 1.2em;
          border-top-left-radius: 10px;
          border-left: 5px solid var(--box-border-color);
        }
        .border-right {
          width: 100%;
          border-top-right-radius: 10px;
          border-right: 5px solid var(--box-border-color);
        }

        .border-right,
        .border-left {
          border-top: 5px solid var(--box-border-color);
        }

        .left-end-cap,
        .right-end-cap {
          width: 10px;
          height: 7px;
          transform: translateY(-1px);
          background: var(--color-foreground);
          z-index: 100;
        }
      }
    }
  }
</style>
