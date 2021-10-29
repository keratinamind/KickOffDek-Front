import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/KICKOFFDEK (2).png";

function NavProjectEditorHome() {
  return (
    <div className="flex justify-between items-center bg-white w-full h-16 py-9 text-green-800 px-7">
      <div className="flex flex-row">
        <Link to="/">
          <img
            className="h-12 rounded-md drop-shadow-sm"
            src={img}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Link to="/dashboard">
          <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-16 h-10 text-sm font-semibold mx-3">
            Close Editor
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavProjectEditorHome;
