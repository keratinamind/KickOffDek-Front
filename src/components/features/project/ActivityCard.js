import React from "react";

function ActivityCard() {
  return (
    <div className="flex justify-start flex-col border border-gray-500 rounded-lg w-10/12 mx-auto p-5 m-5">
      <p>2021-10-30</p>
      <h1 className="text-xl font-bold">One week to go!</h1>
      <p>Activities description goes here</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum
        totam maiores deserunt ducimus repellendus eos aut alias doloremque
        quis? Soluta laudantium voluptas amet sunt nobis ullam quia nulla
        deleniti.
      </p>
      <hr className="m-2" />
      <div>
        <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
          Share
        </button>
        <button className="m-2 p-1.5 rounded-md border border-black hover:bg-purple-600 hover:text-white">
          Read more
        </button>
      </div>
    </div>
  );
}

export default ActivityCard;
