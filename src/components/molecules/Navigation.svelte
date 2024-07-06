<script>
  import "$lib/vars.scss";
</script>

<nav class="navigation">
  <a class="nav-item" href="/">Home</a>
  <a class="nav-item" href="/blog">Blog</a>
</nav>

<style lang="scss">
  @layer component {
    .navigation {
      display: flex;
      width: 100%;
      height: 100%;

      .nav-item {
        float: left;
        padding: 0.5em;
      }
    }    
  } 
</style>
