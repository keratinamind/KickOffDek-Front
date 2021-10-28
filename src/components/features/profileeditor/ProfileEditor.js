import React from "react";
import EditFirstStep from "./EditFirstStep";
import EditSecondStep from "./EditSecondStep";
import EditThirdStep from "./EditThirdStep";

function ProfileEditor() {
  return (
    <div className="container mx-auto flex flex-col my-3 md:my-6">
      {/* Edit Step 1 */}
      <div className="my-1 flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
              1
            </h1>
            <h1 className="mx-3">Intro</h1>
          </div>
          <div>
            <button className="text-green-800">Edit</button>
          </div>
        </div>
          <div>
            <EditFirstStep />
          </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      {/* Edit Step 2 */}
      <div className="my-1 flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
              2
            </h1>
            <h1 className="mx-3">Bio</h1>
          </div>
          <div>
            <button className="text-green-800">Edit</button>
          </div>
        </div>
          <div>
            <EditSecondStep />
          </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      {/* Edit Step 3 */}
      <div className="my-1 flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
              3
            </h1>
            <h1 className="mx-3">Social</h1>
          </div>
          <div>
            <button className="text-green-800">Edit</button>
          </div>
        </div>
          <div>
            <EditThirdStep />
          </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
    </div>
  );
}

export default ProfileEditor;
