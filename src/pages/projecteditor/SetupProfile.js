import React from "react";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import SidebarSetupProfile from "../../components/features/projecteditor/sidebar/SidebarSetupProfile";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupProfile() {
  return (
    <>
    <NavProjectEditor />
    <div className="flex flex-row">
      <SidebarSetupProfile />
      <HomePreview />
    </div>
    </>
  );
}

export default SetupProfile;
