<script lang="ts">
  import type { Snippet } from "svelte";
  import Box from "../atoms/Box.svelte";
  import Heading from "../atoms/Heading.svelte";

  type Props = {
    children: Snippet;
    title: string;
  };

  const { children, title }: Props = $props();
  let expanded = $state(false);

  function toggleExpanded() {
    expanded = !expanded;
  }
</script>

{#if expanded}
  <Box color="cyan">
    {#snippet titleElement()}
      <button class="hidden-button info-collapse" onclick={toggleExpanded}>
        <span class="arrow up-arrow">⌃</span><span class="info-text">Info</span>
      </button>
    {/snippet}
    <Heading depth={2}>{title}</Heading>
    {@render children()}
  </Box>
{:else}
  <button class="hidden-button info-expand" onclick={toggleExpanded}>
    <span class="arrow down-arrow">⌄</span><span class="info-text">
      Info: {title}
    </span>
  </button>
{/if}

<style lang="scss">
  @layer component {
    .hidden-button {
      border: none !important;
      background: inherit !important;
      color: inherit !important;
      margin: none !important;
      padding: none !important;
    }

    .arrow {
      font-family: var(--font-monospace);
      font-weight: bold;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier();
    }

    .info-expand {
      font-size: 1.5em;
      cursor: pointer;

      .info-text {
        font-family: var(--font-primary);
        margin: 0.2em 0;
        text-decoration: underline 0.2em var(--color-cyan);
      }

      .down-arrow {
        margin-right: 0.5em;
        position: relative;
        transition-duration: 1s;
        top: 0.2em;
        color: var(--color-cyan);
      }

      &:hover {
        .down-arrow {
          animation-name: pull-down;
        }
      }
    }

    .info-collapse {
      transform: translateY(-0.1em);
      display: inline !important;
      cursor: pointer;
      font-size: 1.2em;

      .up-arrow {
        position: relative;
        top: 0.1em;
        margin-right: 0.5em;
      }

      .info-text {
        font-family: var(--font-primary);
        margin: 0.2em 0;
      }

      &:hover {
        .up-arrow {
          animation-name: pull-up;
        }
      }
    }
  }

  @keyframes pull-down {
    0% {
      top: 0.2em;
    }
    50% {
      top: 0.5em;
    }
    100% {
      top: 0.2em;
    }
  }

  @keyframes pull-up {
    0% {
      top: 0.1em;
    }
    50% {
      top: -0.3em;
    }
    100% {
      top: 0.1em;
    }
  }
</style>
