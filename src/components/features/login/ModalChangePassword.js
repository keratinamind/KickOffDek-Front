import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

function Modalchangepassword({ closeModal }) {
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
              The one password that got away
            </h2>

            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <p className="text-sm text-blue-700">
                Don't worry you are in a good hand now. We have just emailed you
                a link to reset your password. Please go to your inbox and
                follow the link.
              </p>
            </div>
          </div>
          <div className="p-3 w-11/12 mx-auto text-center space-x-4 md:block">
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center">
                <HiOutlineArrowNarrowLeft />
                <span className="px-5"> Login</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalchangepassword;
