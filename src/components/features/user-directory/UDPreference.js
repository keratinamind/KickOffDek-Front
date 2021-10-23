import React from "react";

function UDPreference() {
  const boldHeader = "text-xl font-bold mx-4 my-4";
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-between items-center border border-gray-300 rounded-lg bg-gray-100">
        <h1 className={boldHeader}>Preferences</h1>
        <button className="bg-green-600 rounded-xl px-5 py-2 text-white m-4">
          Save
        </button>
      </div>
      <div className="flex flex-col justify-start border border-gray-300 rounded-lg bg-gray-100 my-4">
        <h1 className={boldHeader}>Emails</h1>
        <hr />
        <textarea
          name=""
          id=""
          cols="30"
          rows="1"
          placeholder="your email here"
          className="border border-gray-300 my-2"
        ></textarea>
      </div>
      <div className="flex flex-col justify-start border border-gray-300 rounded-lg bg-gray-100 my-4">
        <h1 className={boldHeader}>My shipping address</h1>
        <textarea name="" id="" cols="8" rows="1"></textarea>
        <h1>recipient</h1>
        <h1>address</h1>
        <h1>province</h1>
        <h1>country</h1>
        <h1>postal code</h1>
        <h1>Phone number</h1>
      </div>
    </div>
  );
}

export default UDPreference;
