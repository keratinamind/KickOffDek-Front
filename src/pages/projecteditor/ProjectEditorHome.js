import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import ProjectEditorSideNav from "../../components/features/projecteditor/sidebar/ProjectEditorSideNav";
import NavProjectEditorHome from "../../components/reuse/NavProjectEditorHome";
import { useEditorContext } from "../../contexts/EditorContext";
import axios from "../../config/axios";

function ProjectEditor() {
    const location = useLocation();
    const { setProject } = useEditorContext();

    useEffect(() => {
        try {
            async function fetchProject() {
                const res = await axios.get(`/projects/get-by-id/${location.state?.projectId}`);
                console.log(res.data);
                setProject(res.data);
            }
            fetchProject();
        } catch (err) {
            console.dir(err);
        }
    }, []);

    return (
        <div>
            <NavProjectEditorHome />
            <div className="flex flex-row">
                <ProjectEditorSideNav />
                <HomePreview />
            </div>
        </div>
    );
}

export default ProjectEditor;
