import React from "react";
import { useHistory } from "react-router";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import SidebarSetupProfile from "../../components/features/projecteditor/sidebar/SidebarSetupProfile";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupProfile() {
    const history = useHistory();
    const clickNext = () => {
        history.push("/project/setup/visual");
    };
    const clickBack = () => {
        history.push("/project/setup/project");
    };
    return (
        <>
            <NavProjectEditor clickNext={clickNext} clickBack={clickBack} />
            <div className="flex flex-row">
                <SidebarSetupProfile />
                <HomePreview />
            </div>
        </>
    );
}

export default SetupProfile;
