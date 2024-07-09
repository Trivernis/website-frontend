<script lang="ts">
  import "$lib/vars.scss";
  import { onMount } from "svelte";
  import Box from "../atoms/Box.svelte";

  type Props = {
    error: {
      message: string;
      code?: number;
    };
  };

  const { error }: Props = $props();

  let url = $state("/");

  onMount(() => {
    url = window.location.href;
  });
</script>

<Box color="red">
  <div class="error-container">
    <h3>{error.message}<span class="spacer"></span></h3>
    {#if error.code}
      <span>Code: <code>{error.code}</code></span>
    {/if}
    <b><a href={url} class="reload">Reload!</a></b>
  </div>
</Box>

<style lang="scss">
  @layer component {
    .error-container {
      width: 100%;
      color: var(--color-red);
      .reload {
        float: right;
        margin-right: 0.5em;
      }
    }
  }
</style>
