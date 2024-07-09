<script lang="ts">
import type { Snippet } from "svelte";

type Props = {
	left: Snippet;
	right: Snippet;
	leftRatio?: string;
	rightRatio?: string;
};

const { leftRatio = "1", rightRatio = "1", left, right }: Props = $props();
</script>

<div
  class="container"
  style={`--column-left-flex: ${leftRatio}; --column-right-flex: ${rightRatio}`}
>
  <div class="column-left">
    {@render left()}
  </div>
  <div class="column-spacer"></div>
  <div class="column-right">
    {@render right()}
  </div>
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .container {
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
