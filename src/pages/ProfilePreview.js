import React from "react";
import Preview from "../components/features/profile/Preview";
import NavPreviewProfile from "../components/reuse/NavPreviewProfile";
import { Link } from 'react-router-dom'

function ProfilePreview() {
  return (
    <div className="h-screen">
      <NavPreviewProfile />
      <Preview />
      <Link to="/user/profile/manage">
        <button className="w-36 h-8  bg-green-800 text-white text-xl text-center rounded-lg absolute right-10 top-24">
          Profile Editor
        </button>
      </Link>
    </div>
  );
}

export default ProfilePreview;
