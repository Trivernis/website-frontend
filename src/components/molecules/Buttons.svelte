<script lang="ts">
  import Button8831 from "../atoms/Button8831.svelte";
  import allButtons from "$lib/buttons";
  import * as d3 from "d3-array";
  import { onMount } from "svelte";

  const buttons = $state([...allButtons]);
  onMount(() => {
    d3.shuffle(buttons);
  });
</script>

<div class="buttons">
  {#key buttons}
    {#each buttons as button (button.src)}
      <Button8831 src={button.src} alt={button.alt} href={button.href} />
    {/each}
  {/key}
</div>

<style lang="scss">
  @layer component {
    .buttons {
      width: 100%;
      height: auto;
      display: flex;
      padding-bottom: 1em;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      animation-name: fade-in;
      animation-duration: 2s;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
