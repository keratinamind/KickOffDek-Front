import React from "react";
import { useHistory } from "react-router";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import SidebarSetupProject from "../../components/features/projecteditor/sidebar/SidebarSetupProject";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";
import { useEditorContext } from "../../contexts/EditorContext";

function SetupProject() {
    const { project } = useEditorContext();
    const history = useHistory();
    const clickNext = () => {
        history.push("/project/setup/profile");
    };
    const clickBack = () => {
        history.push("/project", { projectId: project.id });
    };
    return (
        <div className="h-screen">
            <NavProjectEditor clickNext={clickNext} clickBack={clickBack} />
            <div className="flex flex-row">
                <SidebarSetupProject />
                <HomePreview />
            </div>
        </div>
    );
}

export default SetupProject;
