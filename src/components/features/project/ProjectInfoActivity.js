import React from "react";
import ActivityCard from "./ActivityCard";
import CampaignCard from "./CampaignCard";

function ProjectInfoActivity() {
  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <div className="col-span-1">
        <div className="flex justify-evenly flex-col items-center mb-10">
          <h1 className="my-2 text-2xl font-bold">Campaign</h1>
          <CampaignCard className="mb-5" />
          <CampaignCard className="mb-5" />
          <CampaignCard className="mb-5" />
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoActivity;
