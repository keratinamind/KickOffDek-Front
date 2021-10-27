import React from 'react'
import UpdateProjectEditor from '../../components/features/projecteditor/UpdateProjectEditor'
import NavProjectEditor from '../../components/reuse/NavProjectEditor'

function ManageCreateUpdate() {
    return (
        <div className="h-screen">
            <NavProjectEditor />
            <UpdateProjectEditor />
        </div>
    )
}

export default ManageCreateUpdate
