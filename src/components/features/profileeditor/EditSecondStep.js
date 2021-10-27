import React from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import ButtonSets from "../checkout/ButtonSets";

function EditSecondStep() {
  return (
    <>
      <div className="flex flex-row my-2">
        <div className="w-1/2 ml-5">
          <div className="my-2 rounded items-center">
            <h1 className="text-sm my-3">Biography</h1>
            <textarea class="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-96 h-20"></textarea>
          </div>
          <div>
            <div class="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Tagline</h1>
              <input
                type="text"
                placeholder="Placeholder"
                class="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
              <span class="h-full font-normal absolute text-center text-gray-800  text-base items-center justify-center w-8 top-11 right-0 pr-12 py-3">
                0/45
              </span>
            </div>
          </div>
          <div>
            <div class="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Province</h1>
              <input
                type="text"
                placeholder="Province or City"
                class="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
          <div>
            <div class="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Country</h1>
              <input
                type="text"
                placeholder="Country"
                class="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div>
            <div class="relative flex w-96 flex-wrap  items-stretch mb-3">
              <h1 className="text-sm my-3">Contact Number</h1>
              <input
                type="number"
                placeholder="+76 856 9875 625"
                class="border w-96 border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              />
            </div>
          </div>
          <div className="flex my-1 w-144 rounded flex-col mt-5">
            <label
              htmlFor="image"
              className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Profile Image
            </label>
            <div className="relative flex w-full flex-wrap items-stretch">
              <label class="w-80 h-80 flex flex-col items-center justify-center px-4 py-2 bg-white rounded-md shadow-md tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                <BsFillCloudArrowUpFill className="text-3xl mr-3" />
                <span class="mt-2 text-base leading-normal">Select a file</span>
                <input type="file" class="hidden" id="coverPhoto" />
              </label>
            </div>
          </div>
          <div className="flex flex-row items-center mx-5 ">
            <FiAlertCircle className="text-xs text-gray-400" />
            <span className="text-xs text-gray-400 px-2">
              Min. Width 200px & Min. Height 200px
            </span>
          </div>
        </div>
      </div>
      <ButtonSets />
    </>
  );
}

export default EditSecondStep;
