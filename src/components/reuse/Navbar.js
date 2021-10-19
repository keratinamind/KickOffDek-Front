import React from "react";
import img from "../../images/KICKOFFDEK (2).png";
import { HiSearch } from "react-icons/hi";

function Navbar() {
  return (
    <nav class="flex justify-between bg-gray-900 text-white w-screen">
      <div class="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
        <div class="flex flex-row align-center">
          <img class="h-12 rounded-md drop-shadow-sm" src={img} alt="logo" />

          <ul class="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
            <li>
              <span class="hover:text-gray-200" >
                Explore
              </span>
            </li>
            <li>
              <span class="hover:text-gray-200" >
                About
              </span>
            </li>
            <li>
              <span class="hover:text-gray-200" >
                Create
              </span>
            </li>
          </ul>
        </div>
        <div class="">
          <ul class="hidden md:flex px-4 mx-auto  space-x-12">
            <li className="flex align-center items-center">
              <HiSearch />
              <span class="hover:text-gray-200" >
                Search
              </span>
            </li>

            <li>
            <span class="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300">Login</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
