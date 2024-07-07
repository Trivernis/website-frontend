<script>
  import "$lib/vars.scss";
  import Box from "../atoms/Box.svelte";
    import Buttons from "../molecules/Buttons.svelte";
</script>

<div class="footer">
  <Box color="purple">
    <Buttons />
    <div class="justified">
      <div class="left">
        <span><i>CC0 Public Domain, 2024</i></span>
      </div>
      <div class="center">
        <span>Made with and powered by 🐇</span>
      </div>
      <div class="right">
        <a href="/privacy">Privacy</a>
      </div>
    </div>
  </Box>
</div>

<style lang="scss">
  @layer component {
    .footer {
      height: auto;
      min-height: 3em;
      max-height: 10em;
      display: block;
      width: 100%;
      padding: 1em;

      .justified {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .left,
        .right,
        .center {
          width: 33%;
          display: flex;
          flex-direction: row;
        }
        .left {
          justify-content: start;
          padding-left: 0.5em;
        }
        .center {
          justify-content: center;
        }
        .right {
          justify-content: end;
          padding-right: 0.5em;
        }
      }
    }
  }
</style>
