import React from "react";
import img from "../../images/KICKOFFDEK (2).png";
import { HiSearch } from "react-icons/hi";
//ohm added
import { Link } from "react-router-dom";

function Navbar() {
  const user = true;
  return (
    <>
      {user ? (
        <nav className="flex justify-between bg-gray-900 text-white w-full">
          <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
            <div className="flex flex-row align-center">
              <img
                className="h-12 rounded-md drop-shadow-sm"
                src={img}
                alt="logo"
              />

              <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
                <li>
                  <Link to="/explore">
                    <span className="hover:text-gray-200">Explore</span>
                  </Link>
                </li>
                <li>
                  <span className="hover:text-gray-200">About</span>
                </li>
                <li>
                  <span className="hover:text-gray-200">Create</span>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="hidden md:flex px-4 mx-auto  space-x-12">
                <li className="flex align-center items-center">
                  <HiSearch />
                  <span className="hover:text-gray-200">Search</span>
                </li>

                <li>
                  <button className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="flex justify-between bg-gray-900 text-white w-full">
          <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
            <div className="flex flex-row align-center">
              <img
                className="h-12 rounded-md drop-shadow-sm"
                src={img}
                alt="logo"
              />

              <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
                <li>
                  <span className="hover:text-gray-200">Explore</span>
                </li>
                <li>
                  <span className="hover:text-gray-200">About</span>
                </li>
                <li>
                  <span className="hover:text-gray-200">Create</span>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="hidden md:flex px-4 mx-auto  space-x-12">
                <li className="flex align-center items-center">
                  <HiSearch />
                  <span className="hover:text-gray-200">Search</span>
                </li>

                <li>
                  <button className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      {user && (
        <nav className="flex justify-between bg-white text-white w-full">
          <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
            <div className="flex flex-row align-center">
              <img
                className="h-12 rounded-md drop-shadow-sm"
                src={img}
                alt="logo"
              />

              <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
                <li>
                  <span className="hover:text-gray-200">Explore</span>
                </li>
                <li>
                  <span className="hover:text-gray-200">About</span>
                </li>
                <li>
                  <span className="hover:text-gray-200">Create</span>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="hidden md:flex px-4 mx-auto  space-x-12">
                <li className="flex align-center items-center">
                  <HiSearch />
                  <span className="hover:text-gray-200">Search</span>
                </li>

                <li>
                  <button className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300">
                    Create Project
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
