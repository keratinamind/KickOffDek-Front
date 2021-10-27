import React from "react";
import CampaignCard from "../project/CampaignCard";

function UDMyPledge() {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between items-center border border-gray-300 rounded-lg bg-gray-100">
        <h1 className="text-xl font-bold mx-4 my-4">My pledges</h1>
      </div>
      <div className="flex justify-start flex-wrap my-4">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
    </div>
  );
}

export default UDMyPledge;
