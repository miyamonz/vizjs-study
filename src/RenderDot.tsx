import { suspend } from "suspend-react";
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";

const viz = new Viz({ Module, render });

export function RenderDot({ dot }: { dot: string }) {
  const element = suspend(async () => viz.renderString(dot), [dot]);

  console.log(element);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: element,
      }}
    ></div>
  );
}
