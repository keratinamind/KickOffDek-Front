import React from 'react'
import UpdateProject from '../../components/features/projecteditor/UpdateProject'
import NavProjectEditor from '../../components/reuse/NavProjectEditor'

function ManageUpdate() {
    return (
        <div className="h-screen">
            <NavProjectEditor />
            <UpdateProject />
        </div>
    )
}

export default ManageUpdate
