import React from "react";
import RewardHome from "../../components/features/projecteditor/RewardHome";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupRewardHome() {
  return (
    <div className="h-screen">
      <NavProjectEditor />
      <RewardHome />
    </div>
  );
}

export default SetupRewardHome;
