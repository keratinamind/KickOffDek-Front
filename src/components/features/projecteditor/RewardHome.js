import React from "react";
import Cardreward from "../../reuse/Cardreward";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function RewardHome() {
  return (
    <div>
      <div className="flex justify-between mt-7 mx-5">
        <div className="flex flex-row items-center">
          <Link to="/project">
            <HiArrowNarrowLeft className="text-xl mr-3" />
          </Link>
          <h1 className="font-semibold text-xl">Campaign Details</h1>
        </div>
        <div className="">
          <button className="flex flex-row bg-green-700 text-white rounded-lg hover:bg-green-900 h-10 items-center text-md w-32 justify-center">
            <Link to="/project/setup/rewards/new1">
              <BsPlusLg className="text-sm" />
              <h1 className="mx-1">Add new</h1>
            </Link>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Cardreward />
        <Cardreward />
      </div>
    </div>
  );
}

export default RewardHome;
