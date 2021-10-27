import React from "react";

function VerifyUser() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="font-bold text-2xl py-2">Welcome</h1>
          <p className="py-2">Let's create together</p>
          <img src="https://picsum.photos/200" alt="" className="py-2" />
        </div>
      </div>
      <div className="col-span-9">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="py-2">You're currently logged-in as</h1>
          <img
            src="https://picsum.photos/150"
            alt=""
            className="rounded-full py-2"
          />
          <p className="py-2">Username</p>
          <p className="py-2">
            If this isn't you - sign-in with a different account
          </p>
          <button className="py-1 px-4 border border-gray-700 rounded-xl bg-purple-600 text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyUser;
