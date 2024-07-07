<script lang="ts">
  import "$lib/vars.scss";
  import Box from "../atoms/Box.svelte";
  import Buttons from "../molecules/Buttons.svelte";
  import Neko from "./Neko.svelte";
</script>

<div class="footer">
  <Box color="purple">
    <Buttons />
    <div class="justified">
      <div class="left">
        <span><i>CC0 Public Domain, 2024</i></span>
      </div>
      <div class="center">
        <span class="powered-by">
          Made with and powered by <Neko />
        </span>
      </div>
      <div class="right">
        <a href="/privacy">Privacy</a>
      </div>
    </div>
  </Box>
</div>

<style lang="scss">
  @layer component {
    #neko-anchor {
      background: transparent;
      border: none;
      display: inline;
      height: 100%;
      position: relative;
    }

    .footer {
      height: auto;
      min-height: 3em;
      max-height: 10em;
      display: block;
      width: 100%;
      padding: 1em;

      .powered-by {
        font-size: 24px;
      }

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

  :global([data-neko]) {
    z-index: 999 !important;
    pointer-events: inherit !important;
  }
</style>
