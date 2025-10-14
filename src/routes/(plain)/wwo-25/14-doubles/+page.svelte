<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  type ButtonTree = [ButtonTree, ButtonTree] | [1];

  const buttonTree: ButtonTree = $state([1]);

  function double(tree: ButtonTree) {
    if (tree.length === 2) {
      const left = tree.pop() as ButtonTree;
      const right = tree.pop() as ButtonTree;
      tree.push([left, right], [left, right]);
    } else if (tree.length === 1) {
      tree.pop();
      (tree as any).push([1], [1]);
    }
  }
</script>

<MetaTags title="Doubles" description="Weird Web October 2025 - 14. Doubles" />

<svelte:head>
  <link rel="octo:octothorpes" href="weirdweboctober" />
  <link rel="octo:octothorpes" href="Doubles" />
</svelte:head>

{#snippet renderTree(tree: ButtonTree, depth: number)}
  {#if tree.length > 1}
    <div class={`button-list ${depth % 2 === 0 ? "list-v" : "list-h"}`}>
      {#each tree as b}
        {@render renderTree(b as ButtonTree, depth + 1)}
      {/each}
    </div>
  {:else}
    <button
      class="double-button"
      onclick={() => double(tree)}
      style="font-size: {8 * (1 / ((depth + 1) / 2))}em">Double!</button
    >
  {/if}
{/snippet}

<div class="page">
  <div class="back" role="application">
    <a href="./">Back</a>
  </div>
  <div class="button-list">
    {@render renderTree(buttonTree, 0)}
  </div>
</div>

<style lang="scss">
  :root {
    --blink-background: #fcc;
  }
  .page {
    font-size: 10pt;
    background: black;
    color: white;
    font-family: Lexend, Noto-sans, Verdana, Helvetica, sans-serif;
    position: absolute;
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -200;
    flex-direction: column;
    padding: 16px;
  }

  .button-list {
    height: auto;
    width: auto;
    display: grid;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .list-v {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }

  .list-h {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .double-button {
    border: none;
    margin: 0;
    width: auto;
    width: 100%;
    height: 100%;
    padding: 0.125em 0.25em;
  }

  .back {
    position: absolute;
  }
</style>
