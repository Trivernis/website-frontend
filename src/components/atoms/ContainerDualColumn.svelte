<script lang="ts">
  export let leftRatio = "1";
  export let rightRatio = "1";
</script>

<div
  class="container"
  style={`--column-left-flex: ${leftRatio}; --column-right-flex: ${rightRatio}`}
>
  <div class="column-left">
    <slot name="left" />
  </div>
  <div class="column-spacer" />
  <div class="column-right">
    <slot name="right" />
  </div>
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .container {
      transition-duration: 1s;
      display: flex;
      flex-direction: row;

      @include portrait {
        margin: 0 5%;
        flex-direction: column;
      }

      .column-left {
        height: 100%;
        flex: var(--column-left-flex);

        @include portrait {
          width: 100%;
        }
      }

      .column-spacer {
        width: 2em;
        display: flex;
        height: 2em;

        @include portrait {
          display: none;
        }
      }

      .column-right {
        height: 100%;
        flex: var(--column-right-flex);

        @include portrait {
          width: 100%;
        }
      }
    }
  }
</style>
