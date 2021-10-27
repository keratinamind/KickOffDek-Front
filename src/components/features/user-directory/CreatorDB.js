import React from "react";
import UserDirectSideNav from "../../reuse/UserDirectSideNav";
import UDMyProject from "./UDMyProject";

function CreatorDB() {
  return (
    <div className="grid grid-cols-12 my-10">
      <div className="col-span-3">
        <UserDirectSideNav />
      </div>
      <div className="col-span-9">
        <UDMyProject />
      </div>
    </div>
  );
}

export default CreatorDB;
