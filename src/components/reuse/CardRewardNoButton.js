import React, {useState} from "react";
import { BsPerson , BsCalendarCheck } from "react-icons/bs";

function CardRewardNoButton() {
  const [ShowMore, setShowMore] = useState("truncate");
  const [HideShowButton, setHideShowButton] = useState("Show more");

  const showMore = () => {
    setShowMore("")
    setHideShowButton("")
  }

  return (
    <div className="overflow-hidden shadow-lg transform   rounded-lg w-72 m-auto mx-3">
      <div className="w-full block h-full">
        <img
          className="h-44 w-full object-cover"
          alt=""
          src="https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634239095/photo-1537519646099-335112f03225_jwqufc.jpg"
        />
        
        <div className="bg-white w-full p-4 flex flex-col pt-4">
          <div className="flex items-center justify-center">
            <h1 className="text-sm">No Reward</h1>
          </div>
          <div>
            <h1 className={`text-md text-purple-800 mt-4 ${ShowMore}`}>10x14 inch hardcover book, printed in South Australia using eco-friendly ink printed onto sustainable 150gsm paper.

The book will comprise all 100 portraits along with an introduction explaining the project. We’ll include key dates in Sydney’s Lockdown 2.0 and explain the restrictions locals were under in areas that were dubbed “LGAs of concern” at the time. It will also include pictures of the walls where the portraits were posted.</h1>
          <button onClick={showMore} className="text-sm text-green-800 font-semibold">{HideShowButton}</button>
          </div>
          
          <div className="flex flex-start text-xs mt-3 items-center">
            <BsPerson />
            <h1 className="ml-1"> 0 chosen / 200 available</h1>
          </div>
          <div className="flex flex-start text-xs mt-3">
            <BsCalendarCheck />
            <h1 className="ml-1"> Est. delivery is Dec 21</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRewardNoButton;
