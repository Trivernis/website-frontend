<script lang="ts">
  import "$lib/vars.scss";

  export let color = "primary"
  export let title: string | undefined = undefined;
</script>

<div class="box" class:with-title={title} style={`--box-color: var(--color-${color})`}>
  {#if title}
    <div class="box-title">
      <div class="border-left"></div>
      <div class="left-end-cap"></div>
      <span class="title-label">{title}</span>
      <div class="right-end-cap"></div>
      <div class="border-right"></div>
    </div>
  {/if}
  <slot/>
</div>

<style lang="scss">
@layer component {
  .box {
    position: relative;
    --box-border-color: color-mix(in srgb, var(--box-color), #fff 65%);

    padding: 1em;
    border: 5px solid var(--box-border-color);
    border-radius: 10px;
    margin: auto;
    height: auto;
    width: 100%;
    box-shadow: 0 0 20px var(--box-color), inset 0 0 20px var(--box-color);

    &.with-title {
      border-top: transparent;
      padding-top: 1.25em;
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
        transform: translateY(-1em);
        padding: 0.25em;
        background-color: color-mix(in srgb, var(--color-background) 50%, transparent);
        border-radius: 50%;
        box-shadow: 0 0 20px var(--color-background);
        z-index: 99;
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
      
      .border-right, .border-left {
        border-top: 5px solid var(--box-border-color);
      }

      .left-end-cap, .right-end-cap {
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
