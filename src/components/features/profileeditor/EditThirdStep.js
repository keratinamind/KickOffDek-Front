import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
// import { BsFillCloudArrowUpFill } from "react-icons/bs";
// import { FiAlertCircle } from "react-icons/fi";
import ButtonSets from "../checkout/ButtonSets";

function EditThirdStep({ facebook, instagram, twitter, website, userInfo }) {
  const [userInfoChange, setUserInfoChange] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    website: "",
  });
  useEffect(() => {
    setUserInfoChange({ facebook, instagram, twitter, website });
  }, [userInfo]);

  console.log("3rd step", userInfoChange);

  const clickNext = async (e) => {
    try {
      e.preventDefault();
      await axios.put(`/users/update-user`, {
        facebook: userInfoChange.facebook,
        instagram: userInfoChange.instagram,
        twitter: userInfoChange.twitter,
        website: userInfoChange.website,
      });
      alert("updated!").then((res) => console.log(res.data));
    } catch (err) {
      console.dir(err);
    }
  };
  const clickBack = () => {};
  const changeValueInput = (e) => {
    setUserInfoChange((cur) => ({ ...cur, [e.target.name]: e.target.value })); // { username: "dupree", firstName, lastName, username: "izeberg" } => { username: "izeberg", firstName, lastName}
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-144 my-10">
        {/* Input FB  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Facebook</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                facebook.com/
              </span>
            </div>
            <input
              type="text"
              name="facebook"
              id="facebook"
              value={userInfoChange.facebook}
              onChange={changeValueInput}
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
        {/* Input IG  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Instagram</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                @
              </span>
            </div>
            <input
              type="text"
              name="instagram"
              id="instagram"
              value={userInfoChange.instagram}
              onChange={changeValueInput}
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="instagram"
            />
          </div>
        </div>
        {/* Input TWIT  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Twitter</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                @
              </span>
            </div>
            <input
              type="text"
              name="twitter"
              id="twitter"
              value={userInfoChange.twitter}
              onChange={changeValueInput}
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="twitter"
            />
          </div>
        </div>
        {/* Input web url  */}
        <div className="my-2 rounded items-center">
          <h1 className="text-sm my-3">Website</h1>
          <div className="mt-1 flex flex-row rounded shadow-sm border border-gray-300">
            <div className=" flex items-center pointer-events-none">
              <span className="text-gray-700 px-2 sm:text-sm border-r border-gray-300">
                http://
              </span>
            </div>
            <input
              type="text"
              name="website"
              id="website"
              value={userInfoChange.website}
              onChange={changeValueInput}
              className="h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Website"
            />
          </div>
        </div>
      </div>
      <ButtonSets clickNext={clickNext} clickBack={clickBack} />
    </>
  );
}

export default EditThirdStep;
