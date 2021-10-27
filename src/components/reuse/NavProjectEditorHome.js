import React from "react";


function NavProjectEditorHome() {
  return (
    <div className="flex justify-between items-center bg-white w-full h-16 py-9 text-green-800 px-7">
      <div className="flex flex-row">
        <h1 className="text-xl mr-3">KICKOFFDEK</h1>
      </div>
      <div className="flex flex-row items-center">
        <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-16 h-10 text-md font-semibold mx-3">
          Close Editor
        </button>
        
      </div>
    </div>
  );
}

export default NavProjectEditorHome;
