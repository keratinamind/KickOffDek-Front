import React from "react";
import UDHome from "../components/features/user-directory/UDHome";
import UDPreference from "../components/features/user-directory/UDPreference";
import UserDirectSideNav from "../components/reuse/UserDirectSideNav";

function Dashboard() {
  return (
    <div className="grid grid-cols-12 my-10">
      <div className="col-span-3">
        <UserDirectSideNav />
      </div>
      <div className="col-span-9">
        <UDHome />
      </div>
    </div>
  );
}

export default Dashboard;
