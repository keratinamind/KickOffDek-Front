import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import Cardproject from "../../components/reuse/Cardproject";
import Navbar from "../../components/reuse/Navbar";
import { Link } from "react-router-dom";

function ProfileDetails() {
  const url = "https://picsum.photos/1700/1000";
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <div className="flex flex-col justify-center py-5 px-2">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <MdKeyboardBackspace className="text-2xl mr-2" />
              <h1 className="text-xl font-bold mr-8">Profile Details</h1>
            </div>
            <Link to="/create/finish">
            <button className="py-1 px-4 border border-gray-700 rounded-xl bg-green-700 text-white">
              Next
            </button>
            </Link>
          </div>
          <div className="w-10/12 mx-auto flex flex-col">
            <h1 className="my-5">Overviews</h1>
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-500 my-2 p-2"
              placeholder="Campaign Title"
            />
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-500 my-2 p-2"
              placeholder="Tag line"
            />
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-500 my-2 p-2"
              placeholder="City, Country"
            />
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-500 my-2 p-2"
              placeholder="Pick a category"
            />
          </div>
          <div className="w-10/12 mx-auto flex flex-col">
            <h1 className="my-5">About</h1>
            <textarea
              name=""
              id=""
              cols="20"
              rows="8"
              className="border border-gray-500 my-2 p-2"
            ></textarea>
          </div>
          <div className="w-10/12 mx-auto flex flex-col">
            <h1 className="my-5">Social links</h1>
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-500 my-2 p-2"
              placeholder="Facebook"
            />
            <input
              type="text"
              name=""
              id=""
              className="border border-gray-500 my-2 p-2"
              placeholder="Twitter"
            />
          </div>
        </div>
      </div>
      <div className="col-span-9">
        <div
          style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
          className="relative h-screen rounded-lg mx-5 mb-10"
        >
          <div className="absolute inset-x-20 inset-y-1/3 mx-2">
            <h1 className="text-xl font-bold">Project name</h1>
            <h1 className="text-xl mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            </h1>
          </div>
          <div className="absolute bottom-20 right-20">
            <Cardproject />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfileDetails;
