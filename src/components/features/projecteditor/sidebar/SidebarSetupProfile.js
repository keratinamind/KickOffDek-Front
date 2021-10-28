import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEditorContext } from "../../../../contexts/EditorContext";

function SidebarSetupProfile() {
  const { project } = useEditorContext();
  return (
    <div className="w-96 h-screen bg-gray-100 mx-5 my-5 mb-5">
      <div className="flex flex-row items-center">
        <Link to="/project">
          <HiArrowNarrowLeft className="text-xl mr-3" />
        </Link>
        <h1 className="font-semibold text-xl">Profile Details</h1>
      </div>
      <div className="mt-8">
        <h1 className="text-sm ">Overview</h1>
      </div>
      <div className="flex flex-col py-2 my-2 w-full ">
        {/* Input Name */}
        <div className="flex my-2 rounded items-center">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input
              name="displayname"
              className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
              type="text"
              placeholder="Your name"
              value={project.organization}
            />
          </div>
        </div>
        {/* Input Name */}
        <div className="flex my-2 rounded items-center">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input
              name="hastag"
              className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
              type="text"
              placeholder="Your tagline"
              value={project.tagline}
            />
          </div>
        </div>
        {/* Input Name */}
        <div className="flex my-2 rounded items-center">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input
              name="field_name"
              className="text-sm  rounded px-4 py-2 border border-gray-300 focus:border-indigo-500 w-full focus:outline-none focus:ring-indigo-500"
              type="text"
              placeholder="City , Country"
              value={project.province + ", " + project.country}
            />
          </div>
        </div>

        {/* Input About  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">About</h1>
          <textarea class="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-full h-20" value={project.about}></textarea>
        </div>

        {/* Input FB  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Social Link</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">
                facebook.com/
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="facebook"
              value={project.facebook}
            />
          </div>
        </div>
        {/* Input IG  */}
        <div className="my-2 rounded items-center">
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">
                @
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="instagram"
              value={project.instagram}
            />
          </div>
        </div>
        {/* Input TWIT  */}
        <div className="my-2 rounded items-center">
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">
                @
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="twitter"
              value={project.twitter}
            />
          </div>
        </div>
        {/* Input web url  */}
        <div className="my-2 rounded items-center">
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-500">
                http://
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Website"
              value={project.website}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarSetupProfile;
