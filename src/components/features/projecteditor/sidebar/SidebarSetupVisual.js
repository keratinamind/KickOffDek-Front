import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

function SidebarSetupVisual() {
  return (
    <div className="w-96 h-screen bg-gray-100 mx-5 my-5 mb-5">
      <div className="flex flex-row items-center">
        <Link to="/project">
          <HiArrowNarrowLeft className="text-xl mr-3" />
        </Link>
        <h1 className="font-semibold text-md">Visuals</h1>
      </div>
      <div className="flex flex-col py-2 my-2 w-full ">
        {/* Input Cover Image */}
        <div className="mt-10">
          <h1 className="text-sm ">Cover image</h1>
        </div>
        <div className="flex my-2 rounded items-center">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label class="w-full flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
              <BsFillCloudArrowUpFill className="text-3xl mr-3" />
              <span class="mt-2 text-base leading-normal">Select a file</span>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <FiAlertCircle className="text-xs text-gray-400" />
          <span className="text-xs text-gray-400 px-2">
            Min. Width 1920px & Min. Height 1080px
          </span>
        </div>
        {/* Input Campaign Image */}
        <div className="mt-20">
          <h1 className="text-sm ">Campaign Photo (Required)</h1>
        </div>
        <div className="flex my-2 rounded items-center">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label class="w-full flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
              <BsFillCloudArrowUpFill className="text-3xl mr-3" />
              <span class="mt-2 text-base leading-normal">Select a file</span>
              <input type="file" class="hidden" />
            </label>
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <FiAlertCircle className="text-xs text-gray-400" />
          <span className="text-xs text-gray-400 px-2">
            Min. Width 1920px & Min. Height 1080px
          </span>
        </div>
        {/* Input Pitch Video */}
        <div className="flex my-2 rounded items-center mt-20">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input
              name="video_url"
              className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
              type="text"
              placeholder="Video link"
            />
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <FiAlertCircle className="text-xs text-gray-400" />
          <span className="text-xs text-gray-400 px-2">
            Use Youtube or Vimeo URL.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SidebarSetupVisual;
