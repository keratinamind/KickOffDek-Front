import React from "react";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavPreviewProfile() {
  return (
    <div className="flex justify-between items-center bg-green-800 w-full h-16 py-9 text-white px-7">
      <div className="flex flex-row">
        <h1 className="text-xl mr-3">Preview Profile</h1>
        <h1 className="text-xl font-semibold">Eva Elfie</h1>
      </div>
      <Link to="/dashboard">
        <BsXLg className="text-xl" />
      </Link>
    </div>
  );
}

export default NavPreviewProfile;
