import React from "react";

function ButtonSets() {
  return (
    <div className="flex items-center justify-center">
      <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-16 h-10 text-md font-semibold mx-3">
        Back
      </button>
      <button className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-16 h-10 text-md font-semibold mx-3">
        Next
      </button>
    </div>
  );
}

export default ButtonSets;
