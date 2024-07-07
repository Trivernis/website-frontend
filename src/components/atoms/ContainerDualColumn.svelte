<script lang="ts">
  export let leftWidth = "50%";
  export let rightWidth = "50%";
</script>

<div
  class="container"
  style={`--column-left-width: ${leftWidth}; --column-right-width: ${rightWidth}`}
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
        width: var(--column-left-width);

        @include portrait {
          width: 100%;
        }
      }

      .column-spacer {
        width: 2em;

        @include portrait {
          display: none;
        }
      }

      .column-right {
        width: var(--column-right-width);

        @include portrait {
          width: 100%;
        }
      }
    }
  }
</style>
