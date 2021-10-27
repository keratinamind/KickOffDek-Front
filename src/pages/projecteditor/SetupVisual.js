import React from "react";
import SidebarSetupVisual from "../../components/features/projecteditor/sidebar/SidebarSetupVisual";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupVisual() {
  return (
    <div className="h-screen">
      <NavProjectEditor />
      <div className="flex flex-row">
        <SidebarSetupVisual />
        <HomePreview />
      </div>
    </div>
  );
}

export default SetupVisual;
