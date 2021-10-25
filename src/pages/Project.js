import React from "react";
import Dashboard from "../components/features/project/Dashboard";
import ProjectInfoActivity from "../components/features/project/ProjectInfoActivity";
import ProjectInfoCampaign from "../components/features/project/ProjectInfoCampaign";
import ProjectInfoCommunity from "../components/features/project/ProjectInfoCommunity";
import ProjectInfoNavbar from "../components/features/project/ProjectInfoNavbar";

function Project() {
  return (
    <div>
      <Dashboard />
      <ProjectInfoNavbar />
      <ProjectInfoCampaign />
      {/* <ProjectInfoActivity /> */}
      {/* <ProjectInfoCommunity /> */}
    </div>
  );
}

export default Project;
