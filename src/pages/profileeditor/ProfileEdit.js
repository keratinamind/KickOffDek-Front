import React from 'react'
import { Link } from 'react-router-dom'
import ProfileEditor from '../../components/features/profileeditor/ProfileEditor'
import NavProfileEditor from '../../components/reuse/NavProfileEditor'

function ProfileEdit() {
    return (
        <>
        <NavProfileEditor />
        <ProfileEditor />
        <Link to="/user/profile/preview">
        <button className="w-32 h-8  bg-green-800 text-white text-xl text-center rounded-lg absolute right-10 top-24">Preview Profile</button>
        </Link>
        </>
    )
}

export default ProfileEdit
