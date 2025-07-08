import React from "react";

function Flex() {
  return (
    <div>
      <div className="flex">
        <div className="bg-red-500 p-4">Item 1</div>
        <div className="bg-blue-500 p-4">Item 2</div>
      </div>
      <div className="inline-flex bg-gray-200 p-2">
        <div className="bg-green-500 p-4">1</div>
        <div className="bg-yellow-500 p-4">2</div>
      </div>
      <div className="flex flex-row">
        <div className="bg-pink-500 p-4">A</div>
        <div className="bg-purple-500 p-4">B</div>
      </div>
      <div className="flex flex-col">
        <div className="bg-sky-500 p-4">A</div>
        <div className="bg-pink-500 p-4">B</div>
      </div>
    </div>
  );
}

export default Flex;
