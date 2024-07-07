<script lang="ts">
  import { randInt } from "$lib";
  import * as svgRoundCorners from "svg-round-corners";

  const { parsePath, roundCommands } =
    /** @ts-ignore */
    svgRoundCorners?.default ?? svgRoundCorners;

  const maxPoints = 100;
  const points = [];

  const mul = 995 / maxPoints;

  const maxSpreadX = 1000 / maxPoints;

  // for (let j = 0; j < 10; j++) {
  for (let i = 1; i < maxPoints; i++) {
    points.push(`${randInt(i * mul, i * mul + maxSpreadX)},${randInt(0, 100)}`);
  }
  // }
  const downPoints = `M5,${randInt(0, 100)} ${points.map((p) => `L${p}`).join(" ")}`;
  const originalPath = parsePath(downPoints);
  const { path } = roundCommands(originalPath, 10, 3);

  const color = ["primary", "orange", "green", "cyan", "red"][randInt(0, 4)];
</script>

<div class="zigzag" style={`--stroke-color: var(--color-${color})`}>
  <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
    <path fill="transparent" d={path} />
  </svg>
</div>

<style lang="scss">
  @layer component {
    .zigzag {
      display: block;
      height: 100%;
      width: 100%;

      svg {
        filter: drop-shadow(0 0 20px var(--stroke-color));
      }
      path {
        stroke: color-mix(in srgb, var(--stroke-color), #fff 65%);
        stroke-width: 5;
      }
    }
  }
</style>
