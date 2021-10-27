import React from "react";

function UDMyProject() {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-xl font-bold mx-4 my-4">My projects</h1>
      <hr />
      <div className="flex flex-col border border-gray-500 my-5 p-5 rounded-lg">
        <div className="flex justify-starts items-center">
          <h1 className="font-bold mr-10">Project Name</h1>
          <h1 className="mr-10">Current pledge : $xxxx</h1>
          <button className="bg-purple-600 p-3 rounded-lg text-white">
            Go to project editor
          </button>
        </div>

        <div className="flex justify-between mt-5">
          <div className="flex flex-col">
            <h1>Project</h1>
            <h1>All or nothing</h1>
          </div>
          <div className="flex flex-col">
            <h1>Starts</h1>
            <h1>Not ready</h1>
          </div>
          <div className="flex flex-col">
            <h1>Ends</h1>
            <h1>2021-10-31</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UDMyProject;
