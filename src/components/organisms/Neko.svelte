<script lang="ts">
  import Neko from "$lib/neko";
  import { onMount } from "svelte";

  let nekoParentElement: HTMLDivElement | undefined;
  let nekoElement: HTMLDivElement | undefined;

  onMount(() => {
    if (nekoElement && nekoParentElement) {
      new Neko(nekoElement, nekoParentElement, {
        defaultState: "sleep"
      });
    }
  });
</script>

<div class="neko-parent" bind:this={nekoParentElement}>
  <div id="neko" class="neko" bind:this={nekoElement} />
</div>

<style lang="scss">
  @layer component {
    .neko-parent {
      display: inline;
      transform: translateY(14px) translateX(24px);
      height: 32px;
      width: 32px;
      float: right;
      position: relative;
    }
    .neko {
      height: 32px;
      width: 32px;
      left: 16px;
      top: 16px;
      position: absolute;
      image-rendering: pixelated;
      background-size: calc(800%) calc(400%);
      z-index: 999;
    }
  }
</style>
