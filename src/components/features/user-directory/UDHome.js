import React from "react";

function UDHome() {
  const mainVid = "https://www.youtube.com/embed/IJmIGC0nwK0";
  return (
    <div className="flex justify-center flex-col">
      <h1 className="mx-auto text-2xl font-bold mb-8 text-purple-600">
        Welcome to Pozible
      </h1>
      <iframe
        src={mainVid}
        frameborder="0"
        width="600"
        height="400"
        className="mx-auto mb-8"
      ></iframe>
      <div className="mx-auto mb-8">
        <button className="bg-green-600 rounded-xl px-5 py-2 text-white m-4">
          Explore
        </button>
        <button className="bg-purple-600 rounded-xl px-5 py-2 text-white">
          Create Profile
        </button>
      </div>
    </div>
  );
}

export default UDHome;
