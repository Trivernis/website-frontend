<script lang="ts">
  export let title: string;
  export let secondaryTitle: string | undefined = undefined;
</script>

<div class="page-title" class:with-secondary={secondaryTitle}>
  {#if secondaryTitle}
    <h6>{secondaryTitle}</h6>
  {/if}
  <h1>{title}</h1>
</div>

<style lang="scss">
  @layer component {
    .page-title {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0;
      font-size: 3em;
      text-align: center;
      line-height: 1.5em;
      font-family: var(--font-page-title);
      color: color-mix(
        in srgb,
        var(--color-primary),
        var(--color-foreground) 90%
      );
      text-shadow: 0px 0px 0.5em var(--color-primary);

      h1,
      h3 {
        width: 100%;
        z-index: -100;
      }

      margin: 1em 0 0.75em 0;

      &.with-secondary {
        margin-top: 0;
      }
    }
  }

  .page-title {
    h1 {
      margin: 0;
    }
    h6 {
      margin: 0;
      font-size: 0.5em;
      font-weight: lighter;
    }
  }
</style>
