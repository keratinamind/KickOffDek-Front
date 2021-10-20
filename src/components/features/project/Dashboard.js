import React from "react";
import "../project/dashboard.css";

function Dashboard() {
  const url = "https://picsum.photos/200/300";
  return (
    <div style={{ backgroundImage: `url(${url})` }} className="h-screen">
      <h1 className="text-white">hohoh</h1>
    </div>
  );
}

export default Dashboard;
