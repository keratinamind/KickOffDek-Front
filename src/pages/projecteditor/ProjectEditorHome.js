import React from "react";
import HomePreview from "../../components/features/projecteditor/HomePreview";
import ProjectEditorSideNav from '../../components/reuse/ProjectEditorSideNav'

function ProjectEditor() {
  return (
    <div>
      <div className="flex flex-row">
            <ProjectEditorSideNav/>
            <HomePreview/>
            
        </div>
    </div>
  );
}

export default ProjectEditor;
