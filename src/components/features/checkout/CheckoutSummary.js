import React from "react";
import CardRewardNoButton from "../../reuse/CardRewardNoButton";
import CardRewardPreview from "../../reuse/CardRewardPreview";
import ChooseRewards from "./ChooseRewards";
import PledgeSummary from "./PledgeSummary";
import ValidateUser from "./ValidateUser";
import ButtonSets from "./ButtonSets";
import ButtonConfirm from "./ButtonConfirm";
import PaymentDetail from "./PaymentDetail";
import PledgeType from "./PledgeType";
import ShippingDetail from "./ShippingDetail";
import PledgeSummaryAmount from "./PledgeSummaryAmount";

function CheckoutSummary() {
  return (
    <div className="container mx-auto flex flex-col my-3 md:my-6">
      {/* Heading */}
      <div className="my-3 flex-col">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            1
          </h1>
          <h1 className="mx-3">Your pledge</h1>
          <h1 className="text-sm">Endangered Species Plush</h1>
        </div>
        {/* Divide 2 sections */}

        <div className="flex flex-row  justify-center">
          <div className="w-1/2">
            <ChooseRewards />
          </div>
          <div className=" flex flex-col items-center justify-center w-1/2">
            {/* Pledge Summary */}
            <PledgeSummaryAmount />
            {/* Card details */}
            <div className="">
              <CardRewardNoButton />
            </div>
          </div>
        </div>
        <ButtonSets />
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>

      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            2
          </h1>
          <h1 className="mx-3">Details</h1>
          <h1>Endangered Species Plush</h1>
        </div>
        <ValidateUser />
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            3
          </h1>
          <h1 className="mx-3">Your payments</h1>
          <h1 className="text-sm">US$ 12</h1>
        </div>
        <div className="flex flex-row justify-center mb-5">
          <div className="w-1/2">
            <PaymentDetail />
          </div>
          <div className=" flex flex-col items-center justify-center w-1/2">
            {/* Pledge Summary */}
            <PledgeSummaryAmount />
            <PledgeType />
            {/* Card details */}
            <div className="">
              <CardRewardNoButton />
            </div>
          </div>
        </div>
        <ButtonConfirm />
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            4
          </h1>
          <h1 className="mx-3">Your shipping</h1>
          <h1></h1>
        </div>
        <ShippingDetail />
        <ButtonConfirm />
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      <div className="my-1">
        <div className="flex flex-row items-center ">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            5
          </h1>
          <h1 className="mx-3">Your summary</h1>
          <h1>Endangered Species Plush</h1>
        </div>
        <div className="border border-gray-300 mx-auto w-2/3 rounded-lg my-10 py-10">
          <PledgeSummary />
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
            Home
          </button>
          <button className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3">
            Dashboard
          </button>
        </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
