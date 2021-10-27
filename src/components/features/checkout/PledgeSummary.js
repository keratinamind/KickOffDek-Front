import React, { useState } from "react";

function PledgeSummary() {
    const HideShowDetails = ()=> {
        if(!Showdetails) {
            setShowdetails(true)
            setHideShow("Hide details")
        } else {
            setShowdetails(false)
            setHideShow("Show details")
        }
    }
  const [Showdetails, setShowdetails] = useState(false);
  const [HideShow, setHideShow] = useState("Show details")
  return (
    <div className="grid grid-cols-3 gap-4 px-4 mx-10 text-sm">
      <div className="...">Supporter</div>
      <div className="col-span-2">John Doe</div>
      <div className="...">Reward</div>
      <div className="col-span-2">
        <div className="flex justify-between">
          <h1>Super Early Bird - DAWN Backpack Bundle</h1>
          <h3>$129</h3>
        </div>
        <button
          className="text-sm text-green-800"
          onClick={HideShowDetails}
        >
          {HideShow}
        </button>
        <div>
          {Showdetails && (
            <h1 className="text-xs text-gray-400">
              Make a pledge now and select your color and final ship to
              information after the Kickstarter. (Expected retail $249+shipping)
              INCLUDES: DAWN Backpack Laptop Sleeve Rain Cover Camera Bag
              Packing Cube Toiletry Bag
            </h1>
          )}
        </div>
        <div className="flex justify-between">
          <h1>Ship to Germany</h1>
          <h3>$20</h3>
        </div>
      </div>
      <div className="...">Total Amount</div>
      <div className="col-span-2">$123</div>
      <div className="...">Estimate Delivery</div>
      <div className="col-span-2">20 Oct 2022</div>
      <div className="...">Supporter Number</div>
      <div className="col-span-2">3222</div>
      <div className="...">Reward</div>
      <div className="col-span-2">Flying condom glow in the dark</div>
    </div>
  );
}

export default PledgeSummary;
