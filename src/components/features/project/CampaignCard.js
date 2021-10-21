import React from "react";

function CampaignCard() {
  return (
    <div class="border border-gray-500 overflow-hidden shadow-lg rounded-lg w-60 md:w-80 cursor-pointer m-auto mx-3 my-3">
      <a href="#" class="w-full block h-full">
        <img
          alt="blog photo"
          src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          class="h-56 w-full object-cover"
        />
        <div class="bg-white w-full p-4 flex flex-col pt-8">
          <div className="flex flex-start justify-center pt-1">
            <p className="text-gray-900 text-2xl">Reward name</p>
          </div>
          <div className="flex flex-start justify-start pt-4">
            <p class="text-gray-900 text-l">
              reward description here. reward description here.
            </p>
          </div>
          <div className="flex flex-start justify-center">
            <button className="m-2 mx-8 p-1.5 rounded-md border border-black text-white bg-purple-600 hover:bg-white hover:text-black">
              $10 or more
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CampaignCard;
