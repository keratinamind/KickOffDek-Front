import React from "react";
import { FaBeer } from "react-icons/fa";

function UserDirectSideNav() {
  const profilePic = "https://picsum.photos/80/80";
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <img src={profilePic} alt="" className="rounded-full" />
        </div>
        <div className="mx-4">
          <p>Ajarn Dang</p>
          <button>Log out</button>
        </div>
      </div>
      <h1>This is side nav</h1>
      <h1>This is side nav</h1>
      <h1>This is side nav</h1>
      <h1>This is side nav</h1>
      <h1>This is side nav</h1>
    </div>
  );
}

export default UserDirectSideNav;
