<div class="container-medium">
  <slot />
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .container-medium {
      margin: 0 10%;
      transition-duration: 1s;
      display: block;

      @include portrait {
        margin: 0 5%;
      }

      @include landscape {
        margin: 0 15%;
      }
    }
  }
</style>
