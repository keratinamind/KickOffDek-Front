import React from "react";
import Dashboard from "../components/features/project/Dashboard";
import ProjectInfoActivity from "../components/features/project/ProjectInfoActivity";
import ProjectInfoNavbar from "../components/features/project/ProjectInfoNavbar";
import Navbar from "../components/reuse/Navbar";

function ProjectActivity() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <ProjectInfoNavbar />
      <ProjectInfoActivity />
    </div>
  );
}

export default ProjectActivity;
