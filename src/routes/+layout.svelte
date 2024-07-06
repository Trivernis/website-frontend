<script>
  import "../global.scss";
  import Header from "../components/organisms/Header.svelte";
  import Footer from "../components/organisms/Footer.svelte";
</script>

<div class="page">
  <Header />
  <div class="content">
    <slot />
  </div>
  <div class="footer-position">
    <Footer />
  </div>
</div>

<style lang="scss">
  @import "$lib/vars.scss";

  @layer default, layout;

  @layer layout {
    .page {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }
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
      margin-top: auto;
    }
  }
</style>
