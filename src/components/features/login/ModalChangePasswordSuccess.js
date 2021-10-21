import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGofore } from "react-icons/fa";

function Modalchangepasswordsuccess({ closeModal }) {
  return (
    <div className="modalContainer">
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute backdrop-filter backdrop-blur-lg  inset-0 z-0"></div>
        <div className="w-150  p-3 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div className="text-center p-3 flex-auto justify-center">
            <HiOutlineX
              className="text-gray-900 absolute right-7 hover:text-red-800"
              onClick={() => closeModal(false)}
            />
            <h2 className="text-2xl py-4 text-gray-900 ">
              Enter your email to login or register
            </h2>
            <div className="flex flex-row mx-auto justify-center text-xl items-center text-purple-800">
              <div>
                <div className="flex flex-row mx-auto justify-center py-3">
                  <FaFacebookSquare />
                  <p className="text-sm px-3 font-semibold ">Login with Facbook</p>
                </div>
                <div className="flex flex-row mx-auto justify-center py-3">
                  <FaGofore />
                  <p className="text-sm px-3 font-semibold">Login with Google</p>
                </div>
                <div className="flex flex-row mx-auto justify-center py-3">
                  <FaApple />
                  <p className="text-sm px-3 font-semibold">Login with Apple</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 px-8">Or</p>
              </div>
              <div className="flex flex-col items-start">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="@example"
                />
                <p className="text-xs pt-2 text-red-700">
                  Must be a valid email address
                </p>
                <div className="flex items-end">
                  <button className="bg-purple-600 rounded-lg font-semibold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:purple-blue-800 mr-6">
                    Click here
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <p className="text-sm text-green-700">
              By registering with an account, you agree to the T&Cs and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalchangepasswordsuccess;
