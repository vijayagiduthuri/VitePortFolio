import React from "react";

function LayoutDisplay1() {
  return (
    <div>
      {/* 1. Display block - takes full width */}
      <div className="block bg-blue-300 p-4 mb-4">Block</div>

      {/* 2. Display inline - flows within text line */}
      <span className="inline bg-green-300 p-2">Inline</span>

      {/* 3. Display inline-block - behaves like inline but accepts width/height */}
      <div className="inline-block bg-yellow-300 p-4">Inline-block</div>

      {/* 4. Display flex container */}
      <div className="flex bg-purple-300 p-4">Flex container</div>

      {/* 5. Hidden element - not rendered */}
      <div className="hidden">You can't see me!</div>

      {/* 6. Width 50% and height 8rem (32 * 0.25rem) */}
      <div className="w-1/2 h-32 bg-red-400 mb-4">50% width, 8rem height</div>

      {/* 7. Full width and height 4rem */}
      <div className="w-full h-16 bg-green-400">Full width, 4rem height</div>

      {/* 8. Padding 1.5rem all sides, margin 1rem all sides, rounded corners */}
      <div className="p-6 m-4 bg-yellow-300 rounded">
        Padding and Margin Example
      </div>

      {/* 9. Flex container with horizontal spacing between items */}
      <div className="flex space-x-4">
        <div className="bg-pink-400 p-4">Box 1</div>
        <div className="bg-pink-500 p-4">Box 2</div>
        <div className="bg-pink-600 p-4">Box 3</div>
      </div>

      {/* 10. Responsive container centered horizontally with padding */}
      <div className="container mx-auto p-6 bg-gray-200">
        <h1 className="text-2xl font-bold text-center">Centered Container</h1>
        <p>This container is centered and padded.</p>
      </div>

      {/* 11. Visibility examples */}
      <div className="space-y-4 p-4">
        {/* Visible element */}
        <div className="visible bg-green-300 p-4">I am visible</div>

        {/* Invisible element - hidden visually but space reserved */}
        <div className="invisible bg-yellow-300 p-4">
          I am invisible but still take space
        </div>

        {/* Hidden element - completely removed from layout */}
        <div className="hidden bg-red-300 p-4">
          I am hidden and take no space
        </div>
      </div>

      {/* 12. Fixed size box with overflow scroll if content is too big */}
      <div className="w-64 h-32 border overflow-auto p-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* 13. Position relative container with absolutely positioned children */}
      <div className="relative h-40 w-40 bg-blue-400">
        {/* Red box positioned top-left, higher z-index */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-red-500 z-10">
          z-10
        </div>
        {/* Green box slightly shifted, lower z-index */}
        <div className="absolute top-5 left-5 w-20 h-20 bg-green-500 z-0">
          z-0
        </div>
      </div>
    </div>
  );
}

export default LayoutDisplay1;
