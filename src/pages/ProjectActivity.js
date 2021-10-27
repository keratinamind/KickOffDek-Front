import React from "react";
import Dashboard from "../components/features/project/Dashboard";
import ProjectInfoActivity from "../components/features/project/ProjectInfoActivity";
import ProjectInfoNavbar from "../components/features/project/ProjectInfoNavbar";

function ProjectActivity() {
  return (
    <div>
      <Dashboard />
      <ProjectInfoNavbar />
      <ProjectInfoActivity />
    </div>
  );
}

export default ProjectActivity;
