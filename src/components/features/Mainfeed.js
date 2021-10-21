import React from "react";
import Cardproject from "../reuse/Cardproject";

function Mainfeed() {
  return (
    <>
      <div className="grid grid-cols-12 py-10 w-10/12 mx-auto">
        <div className="col-span-10">
          <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
            Catagory 1
          </button>
          <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
            Catagory 2
          </button>
          <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
            Catagory 3
          </button>
          <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
            Catagory 4
          </button>
          <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
            Catagory 5
          </button>
          <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
            Catagory 6
          </button>
          <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
            Catagory 7
          </button>
        </div>
        <div className="col-span-2">
          <button className="m-2 p-1.5 rounded-md border border-black hover:text-white hover:bg-gray-900">
            Trending
          </button>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex justify-center mb-10">
          <h1 className="font-extrabold text-lg">Trending Projects</h1>
        </div>
        <div className="grid grid-cols-3">
          {/* map array here */}
          <div className="m-2 pb-4">
            <Cardproject />
          </div>
          <div className="m-2 pb-4">
            <Cardproject />
          </div>
          <div className="m-2 pb-4">
            <Cardproject />
          </div>
          <div className="m-2 pb-4">
            <Cardproject />
          </div>
          <div className="m-2 pb-4">
            <Cardproject />
          </div>
          <div className="m-2 pb-4">
            <Cardproject />
          </div>
          <div className="m-2 pb-4">
            <Cardproject />
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <button className="border border-black bg-purple-600 rounded-md p-3 text-white">
            Load more
          </button>
        </div>
      </div>
    </>
  );
}

export default Mainfeed;
