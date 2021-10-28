import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Project_info_navbar() {
  const { id } = useParams();

  return (
    <div className="flex justify-center bg-gray-900">
      <div>
        <Link to={`/explore/project/${id}`}>
          <button className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black">
            Campaign
          </button>
        </Link>
      </div>
      <Link to={`/explore/project/activity/${id}`}>
        <button className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black">
          Activities
        </button>
      </Link>
      <Link to={`/explore/project/community/${id}`}>
        <button className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black">
          Community
        </button>
      </Link>
    </div>
  );
}

export default Project_info_navbar;
