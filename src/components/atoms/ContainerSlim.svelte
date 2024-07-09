<script lang="ts">
import type { Snippet } from "svelte";

type Props = {
	children: Snippet;
};

const { children }: Props = $props();
</script>

<div class="container-slim">
  {@render children()}
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .container-slim {
      margin: 0 20%;
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
