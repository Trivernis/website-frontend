<div class="paragraph">
  <slot/>
</div>

<style lang="scss">
  @layer component {
    .paragraph {
      font-family: var(--font-readable);
      hyphens: auto;
      text-align: justify;
      cursor: text;
    }
  }
</style>
