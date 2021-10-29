import React from "react";
import SidebarSetupVisual from "../../components/features/projecteditor/sidebar/SidebarSetupVisual";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";
import { useHistory } from "react-router";
import { useState } from "react";

function SetupVisual() {
    const history = useHistory();
    const clickNext = () => {
        history.push("/project/setup/description");
    };
    const clickBack = () => {
        history.push("/project/setup/profile");
    };
    return (
        <div className="h-screen">
            <NavProjectEditor clickNext={clickNext} clickBack={clickBack} />
            <div className="flex flex-row">
                <SidebarSetupVisual />
                <HomePreview />
            </div>
        </div>
    );
}

export default SetupVisual;
