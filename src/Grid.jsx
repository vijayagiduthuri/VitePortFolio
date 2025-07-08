import React from "react";

function Grid() {
  return (
    <div>
      {/**Grid container */}
      {/* Grid container (block-level by default) */}
      <div className="">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* Inline-grid container - behaves like inline-block */}
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Grid;
