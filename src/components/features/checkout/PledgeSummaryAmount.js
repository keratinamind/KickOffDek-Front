import React from "react";

function PledgeSummaryAmount({chosenReward , amount}) {

  const total = (amount) * (+chosenReward?.minPledge);
  const summary = total + 0;

  return (
    <div className="w-72 border border-gray-300 rounded-xl my-3">
      <div className="flex  justify-center my-4 text-2xl">Pledge Summary</div>
      <div className="flex flex-row justify-between px-4 my-1">
        <span>{amount}x US${chosenReward?.minPledge}</span>
        <span>US${chosenReward?.minPledge}</span>
      </div>
      <div className="flex flex-row justify-between px-4 my-1">
        <span>Shipping</span>
        <span>US$0</span>
      </div>
      <div className="flex flex-row justify-between px-4 my-3 font-semibold">
        <span>Total</span>
        <span>US${summary}</span>
      </div>
    </div>
  );
}

export default PledgeSummaryAmount;
