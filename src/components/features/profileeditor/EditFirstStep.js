import React from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import ButtonSets from "../checkout/ButtonSets";

function EditFirstStep() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="my-3 px-5  flex flex-col">
          <label
            htmlFor="email"
            className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            required
            className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="Simon De La Rey"
          />
          <p className="text-xs pt-2 text-red-700">Name Required!</p>
        </div>
        <div className="my-3 px-5 flex flex-col">
          <label
            htmlFor="lastName"
            className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Lastname
          </label>
          <input
            type="lastName"
            id="lastName"
            name="lastName"
            required
            className="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="Simon De La Rey"
          />
          <p className="text-xs pt-2 text-red-700">Lastname Required!</p>
        </div>
      </div>
      <div className="flex my-1 w-144 rounded flex-col mt-5 mx-5">
        <label
          htmlFor="image"
          className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
        >
          Cover Photo
        </label>
        <div className="relative flex w-full flex-wrap items-stretch">
          <label class="w-full h-80 flex flex-col items-center justify-center px-4 py-2 bg-white rounded-md shadow-md tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
            <BsFillCloudArrowUpFill className="text-3xl mr-3" />
            <span class="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" class="hidden" id="coverPhoto" />
          </label>
        </div>
      </div>
      <div className="flex flex-row items-center mx-5 ">
        <FiAlertCircle className="text-xs text-gray-400" />
        <span className="text-xs text-gray-400 px-2">
          Min. Width 1920px & Min. Height 1080px
        </span>
      </div>
      <ButtonSets />
    </div>
  );
}

export default EditFirstStep;
