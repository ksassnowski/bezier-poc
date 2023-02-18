import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { linear } from "@motion-canvas/core/lib/tweening";
import { PossibleVector2 } from "@motion-canvas/core/lib/types";
import { createRef } from "@motion-canvas/core/lib/utils";
import { CubicBezier } from "../components/CubicBezier";

export default makeScene2D(function* (view) {
  const bezier = createRef<CubicBezier>();
  const points: PossibleVector2[] = [
    [-600, -300],
    [300, -300],
    [-300, 300],
    [600, 300],
  ];

  view.add(
    <CubicBezier
      ref={bezier}
      from={points[0]}
      fromHandle={points[1]}
      toHandle={points[2]}
      to={points[3]}
      lineWidth={8}
      stroke={"whitesmoke"}
    />
  );

  yield* bezier().end(0, 0).to(1, 3, linear);

  yield* waitFor(2);
});
