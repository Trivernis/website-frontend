<script lang="ts">
  import ZigZag from "../atoms/ZigZag.svelte";
</script>

<div class="filler">
  <ZigZag />
</div>

<style lang="scss">
  @layer component {
    .filler {
      padding: 1em;
      display: flex;
      flex: 1 1 auto;
    }
  }
</style>
