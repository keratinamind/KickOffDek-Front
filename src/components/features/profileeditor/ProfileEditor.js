import React, { useState, useEffect } from "react";
import EditFirstStep from "./EditFirstStep";
import EditSecondStep from "./EditSecondStep";
import EditThirdStep from "./EditThirdStep";
import axios from "../../../config/axios";

function ProfileEditor() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get(`/users/get-user`)
      .then((res) => {
        setUserInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  console.log("userInfo",userInfo)


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
          <EditFirstStep userInfo={userInfo} username={userInfo.username} firstName={userInfo.firstName} lastName={userInfo.lastName} />
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
          <EditSecondStep userInfo={userInfo} province={userInfo.province} country={userInfo.country} phoneNumber={userInfo.phoneNumber}/>
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
          <EditThirdStep  userInfo={userInfo} facebook={userInfo.facebook} instagram={userInfo.instagram} twitter={userInfo.twitter} website={userInfo.website} />
        </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
    </div>
  );
}

export default ProfileEditor;
