import React from "react";
import CampaignCard from "./CampaignCard";

function ProjectInfoCommunity() {
  const profilePic = "https://picsum.photos/80/80";
  return (
    <div className="grid grid-cols-4 w-10/12 mx-auto">
      <div className="col-span-3 mr-4">
        <div className="flex justify-start flex-col w-10/12 mx-auto p-5">
          <h1 className="text-2xl font-bold">Comments</h1>
          <textarea
            className="border border-gray-500 my-2"
            name="comment"
            id=""
            cols="80"
            rows="10"
            placeholder="write your comments here"
          ></textarea>
          <div className="flex justify-end">
            <button className="right-0 py-2 px-8 rounded-md border bg-green-800 text-white border-black">
              Post
            </button>
          </div>
          {/* comment start here */}
          <div className="py-6 flex justify-items-start items-center">
            <img
              src={profilePic}
              alt=""
              className="rounded-full border border-gray-500"
            />
            <div className="bg-purple-200 rounded-full p-5 mx-2">
              <h1 className="px-2 font-bold">Username</h1>
              <p className="px-2 inline-block">
                User's comment goes here blah blah blah whatever man
              </p>
            </div>
          </div>
          {/* comment ends here */}
          {/* comment start here */}
          <div className="py-6 flex justify-items-start items-center">
            <img
              src={profilePic}
              alt=""
              className="rounded-full border border-gray-500"
            />
            <div className="bg-purple-200 rounded-full p-5 mx-2">
              <h1 className="px-2 font-bold">Username</h1>
              <p className="px-2 inline-block">
                User's comment goes here blah blah blah whatever man
              </p>
            </div>
          </div>
          {/* comment ends here */}
          {/* comment start here */}
          <div className="py-6 flex justify-items-start items-center">
            <img
              src={profilePic}
              alt=""
              className="rounded-full border border-gray-500"
            />
            <div className="bg-purple-200 rounded-full p-5 mx-2">
              <h1 className="px-2 font-bold">Username</h1>
              <p className="px-2 inline-block">
                User's comment goes here blah blah blah whatever man
              </p>
            </div>
          </div>
          {/* comment ends here */}
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex justify-evenly flex-col items-center mb-10">
          <h1 className="my-2 text-2xl font-bold">Campaign</h1>
          <CampaignCard className="mb-5" />
          <CampaignCard className="mb-5" />
          <CampaignCard className="mb-5" />
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoCommunity;
