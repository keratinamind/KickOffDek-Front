import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

function Modallogincreate({ closeModal }) {
  return (
    <div className="modalContainer">
      <div
        class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div class="absolute backdrop-filter backdrop-blur-lg  inset-0 z-0"></div>
        <div class="w-150  p-3 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div class="text-center p-3 flex-auto justify-center">
            <HiOutlineX
              className="text-gray-900 absolute right-7 hover:text-red-800"
              onClick={() => closeModal(false)}
            />
            <h2 class="text-2xl py-2 text-gray-900 ">
              You don't have KICKOFFDEK account
            </h2>
            <h3 class="text-xl py-2 text-gray-900 ">Register account</h3>
          </div>
          <div className="flex flex-row mx-auto justify-center text-xl items-start w-11/12">
            <div className="mr-5">
              <label
                htmlFor="username"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="FirstName"
              />
              <p className="text-xs pt-2 text-red-700">
                Input your First Name!
              </p>
            </div>
            <div className="">
              <label
                htmlFor="lastName"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="LastName"
              />
              <p className="text-xs pt-2 text-red-700">Input your Last Name!</p>
            </div>
          </div>
          <div className="flex flex-row mx-auto justify-center text-xl items-start w-11/12">
            <div className="mr-5">
              <label
                htmlFor="email"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="firstName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="abc@abcmail.com"
              />
              <p className="text-xs pt-2 text-red-700">Input your Email!</p>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Password"
              />
              <div className="flex flex-row">
                <div class="w-2/3 mt-3 h-1 bg-blue-200 rounded-full">
                  <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                </div>
                <span className="px-4 pt-1 text-sm">Stronk</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row mx-auto my-5 items-center w-11/12">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-green-600"
            ></input>
            <p className="px-3 text-sm">
              Receive our newsletter and new updates
            </p>
          </div>
          <div className="flex flex-row mx-auto my-10 items-center w-11/12">
            <p className="text-sm text-blue-700">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              andTerms of Service apply.
            </p>
          </div>
          <div class="p-3 w-11/12 mx-auto mt-2 text-center space-x-4 md:block">
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center">
              <HiOutlineArrowNarrowLeft />
                <span className="px-5 text-sm "> Login</span>
              </div>
              
              <div>
                <button class="bg-purple-600 w-full rounded-lg font-semibold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:purple-blue-800 mr-6">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modallogincreate;
