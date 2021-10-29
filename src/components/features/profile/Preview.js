import React, { useState, useEffect } from "react";
import axios from "../../../config/axios";
import { HiOutlineShare } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalAvatar from "./ModalAvatar";

function Preview() {
  const [userInfo, setUserInfo] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get(`/users/get-user`)
      .then((res) => {
        setUserInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  console.log("userInfo", userInfo);

  return (
    <>
      <div
        className="bg-scroll h-full flex flex-row rounded-lg"
        style={{
          backgroundImage:
            "url(" +
            "https://res.cloudinary.com/thisisdupreecloud/image/upload/v1635363447/3afb87113976777.6032bfa0581bd_beg1zb.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col mx-60 my-72 text-white">
          <h1 className="text-5xl py-2 font-semibold">{userInfo.firstName}</h1>
          <h1 className="text-2xl py-2">{userInfo.lastName}</h1>
          <div>
            <h1 className="text-xl py-2">{userInfo.country}</h1>
          </div>
          <div className="flex flex-row py-2 my-5">
            <button className="inline-flex bg-purple-600 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
              <HiOutlineShare />
              <span className="px-1">Share</span>
            </button>

            <button className="inline-flex bg-clear mx-3 text-white rounded-full h-8 px-3 justify-center items-center hover:bg-purple-300">
              <HiOutlineShare />
              <span className="px-1" onClick={() => setOpenModal(true)}>About</span>
            </button>
            {openModal && <ModalAvatar closeModal={setOpenModal} avatar={userInfo.avatar} firstName={userInfo.username} />}
          </div>
          <div className="flex flex-row  my-3">
            {/* map ได้ */}
            <FaFacebookSquare className="mx-2 text-2xl" />{" "}
            <Link to="/">
              <FaInstagram className="mx-2 text-2xl" />
            </Link>
            <FaTwitter className="mx-2 text-2xl" />{" "}
            <FaExternalLinkAlt className="mx-2 text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
