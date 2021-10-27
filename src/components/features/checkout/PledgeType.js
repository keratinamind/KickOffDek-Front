import React from "react";

function PledgeType() {
  return (
    <div className="w-72 border border-gray-300 rounded-xl my-3">
      <div className="flex  rounded-md bg-gray-200 justify-center my-2 mx-3 text-sm">
        Pledge Summary
      </div>
      <div className="flex flex-row justify-between px-4 my-1">
        <p className="text-gray-600">
          Pledges are only processed if the target AU$78,000 is reached before{" "}
          <span className="text-lg font-semibold">
            8:00PM on 31st Oct 2021.
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <button className="text-green-800 text-sm">Learn More</button>
      </div>
    </div>
  );
}

export default PledgeType;
