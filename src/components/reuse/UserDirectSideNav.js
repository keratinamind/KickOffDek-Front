import React from "react";
import { FaHome, FaBuromobelexperte } from "react-icons/fa";
import { AiFillSetting, AiFillMessage } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdOutlineCampaign } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function UserDirectSideNav() {
  const profilePic = "https://picsum.photos/80/80";
  return (
    <div>
      <div className="flex justify-center items-center my-4 -ml-28">
        <div>
          <img src={profilePic} alt="" className="rounded-full" />
        </div>
        <div className="mx-4">
          <p>Ajarn Dang</p>
          <button>Log out</button>
        </div>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <FaHome className="mr-2 text-xl" />
        <h1>Home</h1>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <AiFillSetting className="mr-2 text-xl" />
        <h1>Preferences</h1>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <FaBuromobelexperte className="mr-2 text-xl" />
        <h1>My pledges</h1>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <AiFillMessage className="mr-2 text-xl" />
        <h1>My messeges</h1>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <h1 className="font-bold text-l">Creating</h1>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <MdOutlineSpaceDashboard className="mr-2 text-xl" />
        <h1>Creator Dashboard</h1>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <CgProfile className="mr-2 text-xl" />
        <h1>Manage profile</h1>
      </div>
      <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
        <MdOutlineCampaign className="mr-2 text-xl" />
        <h1>My campaign</h1>
      </div>
    </div>
  );
}

export default UserDirectSideNav;
