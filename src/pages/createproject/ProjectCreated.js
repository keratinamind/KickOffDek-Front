import React from "react";

function ProjectCreated() {
  const url = "https://picsum.photos/400/300";
  return (
    <div className="w-10/12 mx-auto flex justify-center">
      <div className="flex flex-col items-center">
        <img src={url} alt="" className="my-5" />
        <h1>Project created!</h1>
        <h1 className="mb-10">
          There are only few things left like adding your payment details and
          setting up your rewards. Would you like to do it now?
        </h1>
        <div className="flex flex-col">
          <button className="border border-gray-500 p-2 my-2 rounded-lg bg-purple-600">
            Go to Project Editor
          </button>
          <button className="p-2 my-2">Save draft and do it later</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCreated;
