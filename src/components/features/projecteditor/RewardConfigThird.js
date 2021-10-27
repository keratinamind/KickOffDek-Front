import React, { useState } from "react";

import { HiArrowNarrowLeft } from "react-icons/hi";

import CardRewardPreview from "../../reuse/CardRewardPreview";
import RewardConfigBoxAdditional from "../../reuse/reward/RewardConfigBoxAdditional";
import { Link } from "react-router-dom";

function RewardConfigThird() {
  return (
    <>
      <div className="h-screen overflow-auto">
        <div className="w-full h-1 bg-blue-200 rounded-full">
          <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <div className="flex flex-row justify-between mt-10 mx-5">
              <div className="flex flex-row items-center">
                <Link to="/project/setup/rewards/new2">
                  <HiArrowNarrowLeft className="text-xl mr-3" />
                </Link>
                <h1 className="font-semibold text-xl">Profile Details</h1>
              </div>
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <Link to="/project/setup/rewards">
                    <button className="bg-green-700 hover:bg-green-800 h-8 w-16 text-md text-white rounded-lg">
                      Complete
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <RewardConfigBoxAdditional />
          </div>
          <div className="w-1/2 flex justify-center mx-5 my-10 border border-gray-300 rounded-xl">
            <CardRewardPreview />
          </div>
        </div>
      </div>
    </>
  );
}

export default RewardConfigThird;