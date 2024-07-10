<script lang="ts">
  import { shuffle } from "$lib";
  import Button8831 from "../atoms/Button8831.svelte";
  import allButtons from "$lib/buttons";

  const buttons = $derived.by(() => {
    const newList = [...allButtons];
    shuffle(newList);
    return newList;
  });
</script>

<div class="buttons">
  {#each buttons as button}
    <Button8831 src={button.src} alt={button.alt} href={button.href} />
  {/each}
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
    }
  }
</style>
