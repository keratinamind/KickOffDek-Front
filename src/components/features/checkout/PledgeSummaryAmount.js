import React from "react";

function PledgeSummaryAmount() {
  return (
    <div className="w-72 border border-gray-300 rounded-xl my-3">
      <div className="flex  justify-center my-4 text-2xl">Pledge Summary</div>
      <div className="flex flex-row justify-between px-4 my-1">
        <span>1x AU$50(Edit)</span>
        <span>US$50</span>
      </div>
      <div className="flex flex-row justify-between px-4 my-1">
        <span>Shipping</span>
        <span>US$5</span>
      </div>
      <div className="flex flex-row justify-between px-4 my-3 font-semibold">
        <span>Total</span>
        <span>US$55</span>
      </div>
    </div>
  );
}

export default PledgeSummaryAmount;
