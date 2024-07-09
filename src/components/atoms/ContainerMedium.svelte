<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<div class="container-medium">
  {@render children()}
</div>

<style lang="scss">
  @import "$lib/styles/mixins.scss";

  @layer component {
    .container-medium {
      margin: 0 15%;
      display: block;

      @include portrait {
        margin: 0 10%;
      }

      @include landscape {
        margin: 0 20%;
      }
    }
  }
</style>
