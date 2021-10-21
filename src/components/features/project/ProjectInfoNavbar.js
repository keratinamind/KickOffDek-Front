import React from "react";

function Project_info_navbar() {
  return (
    <div className="flex justify-center bg-gray-900">
      <div>
        <button className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black">
          Campaign
        </button>
      </div>
      <button className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black">
        Activities
      </button>
      <button className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black">
        Community
      </button>
    </div>
  );
}

export default Project_info_navbar;
