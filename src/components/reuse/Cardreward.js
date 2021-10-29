import React, { useState } from "react";
import { BsPerson, BsCalendarCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

function CardReward({
  id,
  title,
  description,
  image,
  minPledge,
  limit,
  estDeliveryMonth,
  estDeliveryYear,
}) {
  const [ShowMore, setShowMore] = useState("truncate");
  const [HideShowButton, setHideShowButton] = useState("Show more");

  const showMore = () => {
    setShowMore("");
    setHideShowButton("");
  };

  return (
    <div className="overflow-hidden shadow-lg  transform   rounded-lg w-72 m-auto mx-3">
      <div className="w-full block h-full">
        <img className="h-44 w-full object-cover" alt="" src={`${image}`} />
        <button className="absolute top-3 right-3 text-white bg-green-700 w-20 rounded-lg h-10 hover:bg-green-900">
          Edit
        </button>
        <div className="bg-white w-full p-4 flex flex-col pt-4">
          <div className="flex items-center justify-center">
            <h1 className="text-sm">{title}</h1>
          </div>
          <div>
            <h1 className={`text-md text-purple-800 mt-4 ${ShowMore}`}>
              {description}
            </h1>
            <button
              onClick={showMore}
              className="text-sm text-green-800 font-semibold"
            >
              {HideShowButton}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {/* Button send */}
            <Link
              to={{
                pathname: "/project/pledge/new",
                
                state: { rewardId: id },
              }}
            >
              <button className="rounded-lg bg-green-700 text-white w-full h-10">
                ${minPledge} OR MORE
              </button>
            </Link>
          </div>
          <div className="flex flex-start text-xs mt-3 items-center">
            <BsPerson />
            <h1 className="ml-1"> 0 chosen / {limit} available</h1>
          </div>
          <div className="flex flex-start text-xs mt-3">
            <BsCalendarCheck />
            <h1 className="ml-1">
              {" "}
              Est. delivery is {estDeliveryMonth} {estDeliveryYear}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardReward;
