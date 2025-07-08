import React from "react";

function Flex() {
  return (
    <div>
      {/*Flex-container*/}
      {/* Flex Container - Items placed horizontally by default (flex-row) */}
      <div className="flex">
        <div className="bg-red-500 p-4">Item 1</div>
        <div className="bg-blue-500 p-4">Item 2</div>
      </div>
      {/* Inline Flex Container - behaves like inline element but with flex layout */}
      <div className="inline-flex bg-gray-200 p-2">
        <div className="bg-green-500 p-4">1</div>
        <div className="bg-yellow-500 p-4">2</div>
      </div>
      {/* Explicit flex-row (same as default flex direction) */}
      <div className="flex flex-row">
        <div className="bg-pink-500 p-4">A</div>
        <div className="bg-purple-500 p-4">B</div>
      </div>
      {/* Flex Column - Children stacked vertically (top to bottom) */}
      <div className="flex flex-col">
        <div className="bg-sky-500 p-4">A</div>
        <div className="bg-pink-500 p-4">B</div>
      </div>
      {/*flex-wrapping*/}
      {/* Flex container that allows items to wrap onto the next line if needed */}
      <div className="flex flex-wrap gap-4 bg-gray-100 p-4">
        <div className="bg-red-400 p-4 w-32">Box 1</div>
        <div className="bg-blue-400 p-4 w-32">Box 2</div>
        <div className="bg-green-400 p-4 w-32">Box 3</div>
        <div className="bg-yellow-400 p-4 w-32">Box 4</div>
        <div className="bg-pink-400 p-4 w-32">Box 5</div>
      </div>
      {/* Flex container with no wrapping (everything stays in one row) */}
      <div className="flex flex-nowrap gap-4 bg-gray-200 p-4 overflow-auto">
        <div className="bg-red-500 p-4 w-32">Box 1</div>
        <div className="bg-blue-500 p-4 w-32">Box 2</div>
        <div className="bg-green-500 p-4 w-32">Box 3</div>
        <div className="bg-yellow-500 p-4 w-32">Box 4</div>
        <div className="bg-pink-500 p-4 w-32">Box 5</div>
      </div>
      {/* Flex container where wrapped items go to the top instead of the bottom */}
      <div className="flex flex-wrap-reverse gap-4 bg-gray-200 p-4 overflow-auto">
        <div className="bg-red-500 p-4 w-32">Box 1</div>
        <div className="bg-blue-500 p-4 w-32">Box 2</div>
        <div className="bg-green-500 p-4 w-32">Box 3</div>
        <div className="bg-yellow-500 p-4 w-32">Box 4</div>
        <div className="bg-pink-500 p-4 w-32">Box 5</div>
      </div>
      {/**Flex-sizing */}
      {/**Flex-grow */}
      <div className="flex gap-4 w-full border p-4">
        <div className="bg-red-500 p-4 flex-grow-1">Grow 1 (flex-grow:1)</div>
        <div className="bg-blue-500 p-4 ">Fixed size</div>
      </div>
      {/**Flex shrink */}
      <div className="flex gap-2 w-64 border p-2">
        <div className="bg-green-400 p-4 flex-shrink">Shrinkable</div>
        <div className="bg-yellow-400 p-4 w-40">Fixed width</div>
      </div>
      {/**Flex -[number] */}
      <div className="flex gap-2 w-full border p-2">
        <div className="bg-purple-400 p-4 flex-[2_1_0%]">flex: 2 1 0%</div>
        <div className="bg-pink-400 p-4 flex-[1_1_0%]">flex: 1 1 0%</div>
      </div>
      {/**Justify-content */}
      {/* Justify Start - Items aligned to the start (left) */}
      <div className="flex justify-start gap-2 bg-gray-100 p-4 mb-4">
        <div className="bg-red-400 p-4">Start 1</div>
        <div className="bg-blue-400 p-4">Start 2</div>
        <div className="bg-green-400 p-4">Start 3</div>
      </div>

      {/* Justify Center - Items centered horizontally */}
      <div className="flex justify-center gap-2 bg-gray-100 p-4 mb-4">
        <div className="bg-red-400 p-4">Center 1</div>
        <div className="bg-blue-400 p-4">Center 2</div>
        <div className="bg-green-400 p-4">Center 3</div>
      </div>

      {/* Justify End - Items aligned to the end (right) */}
      <div className="flex justify-end gap-2 bg-gray-100 p-4 mb-4">
        <div className="bg-red-400 p-4">End 1</div>
        <div className="bg-blue-400 p-4">End 2</div>
        <div className="bg-green-400 p-4">End 3</div>
      </div>

      {/* Justify Between - Items pushed to ends, equal space between */}
      <div className="flex justify-between bg-gray-100 p-4 mb-4">
        <div className="bg-red-400 p-4">Between 1</div>
        <div className="bg-blue-400 p-4">Between 2</div>
        <div className="bg-green-400 p-4">Between 3</div>
      </div>

      {/* Justify Around - Equal space around each item */}
      <div className="flex justify-around bg-gray-100 p-4 mb-4">
        <div className="bg-red-400 p-4">Around 1</div>
        <div className="bg-blue-400 p-4">Around 2</div>
        <div className="bg-green-400 p-4">Around 3</div>
      </div>

      {/* Justify Evenly - Equal space between and at edges */}
      <div className="flex justify-evenly bg-gray-100 p-4 mb-4">
        <div className="bg-red-400 p-4">Evenly 1</div>
        <div className="bg-blue-400 p-4">Evenly 2</div>
        <div className="bg-green-400 p-4">Evenly 3</div>
      </div>
      {/**Align-items */}
      {/* items-start - Align children to the top of the container */}
      <div className="flex items-start h-32 bg-gray-100 p-4 gap-4 mb-6">
        <div className="bg-red-400 p-2">Start</div>
        <div className="bg-blue-400 p-8">Start</div>
      </div>

      {/* items-center - Align children vertically center in the container */}
      <div className="flex items-center h-32 bg-gray-100 p-4 gap-4 mb-6">
        <div className="bg-red-400 p-2">Center</div>
        <div className="bg-blue-400 p-8">Center</div>
      </div>

      {/* items-end - Align children to the bottom of the container */}
      <div className="flex items-end h-32 bg-gray-100 p-4 gap-4 mb-6">
        <div className="bg-red-400 p-2">End</div>
        <div className="bg-blue-400 p-8">End</div>
      </div>

      {/* items-stretch - Stretch items to fill full height (default behavior) */}
      <div className="flex items-stretch h-32 bg-gray-100 p-4 gap-4 mb-6">
        <div className="bg-red-400 p-2">Stretch</div>
        <div className="bg-blue-400 p-2">Stretch</div>
      </div>

      {/* items-baseline - Align children based on their text baseline */}
      <div className="flex items-baseline h-32 bg-gray-100 p-4 gap-4 text-2xl">
        <div className="bg-red-400 p-2 text-sm">A</div>
        <div className="bg-blue-400 p-2">B</div>
        <div className="bg-green-400 p-2 text-4xl">C</div>
      </div>
    </div>
  );
}

export default Flex;
