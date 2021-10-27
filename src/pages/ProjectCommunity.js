import React from "react";
import ProjectInfoCommunity from "../components/features/project/ProjectInfoCommunity";
import Dashboard from "../components/features/project/Dashboard";
import ProjectInfoNavbar from "../components/features/project/ProjectInfoNavbar";

function ProjectCommunity() {
  return (
    <div>
      <Dashboard />
      <ProjectInfoNavbar />
      <ProjectInfoCommunity />
    </div>
  );
}

export default ProjectCommunity;
