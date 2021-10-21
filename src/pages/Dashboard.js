import React from "react";
import UserDirectSideNav from "../components/reuse/UserDirectSideNav";

function Dashboard() {
  return (
    <div className="grid grid-cols-10 w-10/12 mx-auto">
      <div className="col-span-2 border border-gray-900">
        <UserDirectSideNav />
      </div>
      <div className="col-span-8 border border-gray-900">
        <h1>UD body</h1>
      </div>
    </div>
  );
}

export default Dashboard;
