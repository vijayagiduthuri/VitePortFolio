import React from "react";

function Grid() {
  return (
    <div>
      {/**Grid container */}
      {/* Grid container (block-level by default) */}
      <div className="grid grid-cols-3 gap-4 bg-gray-300 p-4">
        <div className="bg-red-400 p-4">Item 1</div>
        <div className="bg-blue-400 p-4">Item 2</div>
        <div className="bg-green-400 p-4">Item 3</div>
        <div></div>
      </div>
      {/* Inline-grid container - behaves like inline-block */}
      <p className="inline-grid grid-cols-2 gap-2 bg-yellow-100 p-2 mt-4">
        <span className="bg-pink-400 p-2">A</span>
        <span className="bg-purple-400 p-2">B</span>
      </p>
    </div>
  );
}

export default Grid;
