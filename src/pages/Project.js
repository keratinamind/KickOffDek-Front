import React from "react";
import { useLocation } from "react-router";
import Dashboard from "../components/features/project/Dashboard";
import ProjectInfoActivity from "../components/features/project/ProjectInfoActivity";
import ProjectInfoCampaign from "../components/features/project/ProjectInfoCampaign";
import ProjectInfoCommunity from "../components/features/project/ProjectInfoCommunity";
import ProjectInfoNavbar from "../components/features/project/ProjectInfoNavbar";
import Footer from "../components/reuse/Footer";
import Navbar from "../components/reuse/Navbar";

function Project() {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <Dashboard />
      <ProjectInfoNavbar />
      <ProjectInfoCampaign />
      {/* <ProjectInfoActivity />
      <ProjectInfoCommunity /> */}
      <Footer />
    </div>
  );
}

export default Project;
