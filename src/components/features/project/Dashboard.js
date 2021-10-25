import React from "react";
import Cardproject from "../../reuse/Cardproject";

function Dashboard() {
  const url = "https://picsum.photos/1700/1000";
  return (
    <div
      style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
      className="relative h-screen"
    >
      <div className="absolute inset-x-20 inset-y-1/3 mx-2">
        <h1 className="text-6xl font-bold">Project name</h1>
        <h1 className="text-xl mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
        </h1>
      </div>
      <div className="absolute bottom-20 right-20">
        <Cardproject />
      </div>
    </div>
  );
}

export default Dashboard;
