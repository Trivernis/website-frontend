<script>
  import "../global.scss";
  import Header from "../components/organisms/Header.svelte";
    import Footer from "../components/organisms/Footer.svelte";
</script>

<Header />
<div class="content">
  <slot />
</div>
<div class="footer-position">
<Footer/>
</div>

<style lang="scss">
  @import "$lib/vars.scss";

  @layer default, layout;

  @layer layout {
    .content {
      margin: 0 20%;
      transition-duration: 1s;
      display: block;

      @include portrait {
        margin: 0 5%;
      }

      @include landscape {
        margin: 0 30%;
      }
    }

    .footer-position {
      margin: 0;
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }
</style>
