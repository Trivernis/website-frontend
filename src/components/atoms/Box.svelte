<script lang="ts">
  import "$lib/vars.scss";

  export let color = "primary"
</script>

<div class="box" style={`--box-color: var(--color-${color})`}>
  <slot/>
</div>

<style lang="scss">
@layer component {
  .box {
    padding: 0.5em;
    border: 2px solid var(--box-color);
    border-radius: 10px;
    margin: auto;
    height: auto;
    width: 100%;
  }  
}
</style>
