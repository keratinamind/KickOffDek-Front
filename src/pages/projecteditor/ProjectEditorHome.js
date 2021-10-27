import React from "react";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import ProjectEditorSideNav from '../../components/features/projecteditor/sidebar/ProjectEditorSideNav'
import NavProjectEditorHome from "../../components/reuse/NavProjectEditorHome";

function ProjectEditor() {
  return (
    <div>
      <NavProjectEditorHome />
      <div className="flex flex-row">
            <ProjectEditorSideNav/>
            <HomePreview/>
            
        </div>
    </div>
  );
}

export default ProjectEditor;
