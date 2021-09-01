import React from "react";
import SVGComponent from "../../component/svg/SVGComponent";

function SVGContainer() {
  import("../../../wasm-rust/pkg").then((module) => {
    module.output_svg("svg");
  });
  return <SVGComponent />;
}

export default SVGContainer;
