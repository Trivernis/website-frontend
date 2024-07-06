<script>
  import "../global.scss";
  import Header from "../components/organisms/Header.svelte";
</script>

<Header />

<div class="content">
  <slot />
</div>

<style lang="scss">
  @import "$lib/vars.scss";

  @layer default, layout;

  @layer layout {
    .content {
      margin: 0 20%;
      transition-duration: 1s;

      @include portrait {
        margin: 0 5%;
      }

      @include landscape {
        margin: 0 30%;
      }
    }
  }
</style>
