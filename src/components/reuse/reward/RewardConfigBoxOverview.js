import React from 'react'
import { BsCloudArrowUpFill } from "react-icons/bs";

function RewardConfigBoxOverview() {
    return (
        <div className=" mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
              <div className="mt-10">
                <h1>Reward overview</h1>
              </div>
              <div className="mt-7">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm  text-gray-800 dark:text-gray-100"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="border w-full border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="FirstName"
                />
              </div>
              <div className="mt-7">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm  text-gray-800 dark:text-gray-100"
                >
                  Description
                </label>
                <textarea class="px-2 py-2 text-sm font-normal border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 rounded w-full h-24"></textarea>
              </div>
              <div className="my-7">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm  text-gray-800 dark:text-gray-100"
                >
                  Reward Image
                </label>
                <label class="w-full h-80 flex flex-col items-center justify-center px-4 py-6 bg-white rounded-md tracking-wide uppercase border border-gray-300 cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150">
                  <BsCloudArrowUpFill className="text-3xl" />
                  <span class="mt-2 text-base leading-normal">
                    Select a file
                  </span>
                  <input type="file" class="hidden" />
                </label>
              </div>
            </div>
    )
}

export default RewardConfigBoxOverview
