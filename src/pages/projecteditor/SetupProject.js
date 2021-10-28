import React from "react";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import SidebarSetupProject from "../../components/features/projecteditor/sidebar/SidebarSetupProject";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupProject() {
    return (
        <div className="h-screen">
            <NavProjectEditor />
            <div className="flex flex-row">
                <SidebarSetupProject />
                <HomePreview />
            </div>
        </div>
    );
}

export default SetupProject;
