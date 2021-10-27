import React from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import ButtonSets from "../checkout/ButtonSets";

function EditThirdStep() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-144 my-10">
        {/* Input FB  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Facebook</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                facebook.com/
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
        {/* Input IG  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Instagram</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                @
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="instagram"
            />
          </div>
        </div>
        {/* Input TWIT  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Twitter</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                @
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="twitter"
            />
          </div>
        </div>
        {/* Input web url  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Website</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                http://
              </span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Website"
            />
          </div>
        </div>
      </div>
      <ButtonSets />
    </>
  );
}

export default EditThirdStep;
