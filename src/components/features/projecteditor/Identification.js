import React from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";

function Identification() {
  return (
    <div>
      <div>
          <h1 className="text-3xl font-semibold">Identification</h1>
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
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
        >
          Account Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
          placeholder="LastName"
        />
      </div>
    </div>
  );
}

export default Identification;
