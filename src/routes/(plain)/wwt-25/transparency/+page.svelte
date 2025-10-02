<script>
  import ContainerSlim from "../../../../components/atoms/ContainerSlim.svelte";
</script>

<div class="backdrop"></div>
<ContainerSlim>
  <div class="glass">T R A N S P A R E N C Y</div>
  <div class="glass roundest">Let</div>
  <div class="glass">Me</div>
  <div class="glass roundest">Be</div>
  <div class="glass clear">C L E A R</div>
</ContainerSlim>

<style lang="scss">
  .backdrop {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/tokyo-tower-reflection.jpg");
  }

  .glass {
    backdrop-filter: blur(5px) grayscale(10%);
    color: white;
    font-size: 50pt;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1em;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 100vh;
    text-align: center;
    font-family: Lexend, Noto-Sans, Verdana, sans-serif;

    box-shadow:
      inset 10px 10px 10px rgba(255, 255, 255, 0.2),
      inset -10px -10px 10px rgba(0, 0, 0, 0.2),
      10px 10px 10px rgba(0, 0, 0, 0.5);
  }

  .roundest {
    border-radius: 100%;
  }

  .clear {
    background-color: rgba(255, 255, 255, 0);
    color: rgba(255, 255, 255, 0.2);
  }
</style>
