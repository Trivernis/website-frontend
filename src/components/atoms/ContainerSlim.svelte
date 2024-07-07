<div class="container-slim">
  <slot />
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .container-slim {
      margin: 0 20%;
      transition-duration: 1s;
      display: block;

      @include portrait {
        margin: 0 5%;
      }

      @include landscape {
        margin: 0 25%;
      }
    }
  }
</style>
