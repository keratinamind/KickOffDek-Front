import React from 'react'
import HomePreview from '../../components/features/projecteditor/HomePreview'
import SidebarSetupProject from '../../components/features/projecteditor/sidebar/SidebarSetupProject'

function SetupProject() {
    return (
        <div>
      <div className="flex flex-row">
            <SidebarSetupProject />
            <HomePreview />
            
        </div>
    </div>
    )
}

export default SetupProject
