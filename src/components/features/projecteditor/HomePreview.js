import React from "react";
import { HiDeviceMobile, HiOutlineShare } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";

import Cardproject from "../../reuse/Cardproject";

function HomePreview() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end mx-3 my-5">
        <div className="flex flex-row mx-3 items-center">
          <HiDeviceMobile />
          <button className="mx-2">Mobile View</button>
        </div>
        <div className="flex flex-row mx-3 items-center">
            <FaExternalLinkAlt />
          <button className="mx-2">Fullscreen View</button>
        </div>
      </div>

      <div
        className="bg-scroll h-full flex flex-row rounded-lg"
        style={{
          backgroundImage:
            "url(" +
            "https://res.cloudinary.com/thisisdupreecloud/image/upload/v1634901885/photo-1509914398892-963f53e6e2f1_jfxosp.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full justify-around items-center text-gray-100">
          <div>
            <h1 className="text-5xl font-semibold py-2">Simon Del la ray</h1>
            <h1 className="text-3xl py-2">Brilliant guy</h1>
            <span className="text-xl py-2">Queencliff , Aus </span>
            <span className="text-xl px-2">Music</span>
            <div className="flex flex-row py-2 my-5">
              <button className="inline-flex bg-purple-600 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                <HiOutlineShare />
                <span className="px-1">Share</span>
              </button>

              <button className="inline-flex bg-clear mx-3 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
                <HiOutlineShare />
                <span className="px-1">About</span>
              </button>
            </div>
            <div className="flex flex-row  my-3">
              {/* map ได้ */}
              <FaFacebookSquare className="mx-2 text-2xl" /> <FaInstagram className="mx-2 text-2xl" />
              <FaTwitter className="mx-2 text-2xl" /> <FaExternalLinkAlt className="mx-2 text-2xl" />
            </div>
          </div>
          <div>
            <Cardproject />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePreview;
