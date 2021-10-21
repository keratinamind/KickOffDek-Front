import React from "react";
import Cardproject from "../reuse/Cardproject";
import ModalLogin from "./login/ModalLogin";
import { useState } from "react";
import Modalchangepassword from "./login/ModalChangePassword";
import Modalchangepasswordsuccess from "./login/ModalChangePasswordSuccess";
import Modallogincreate from "./login/ModalLoginCreate";
import Modalloginpassword from "./login/ModalLoginPassword";

function Landing() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalPassword, setOpenModalPassword] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalChangePass, setOpenModalChangePass] = useState(false);
  const [openModalChangeSucc, setOpenModalChangeSucc] = useState(false);
  return (
    <>
      <div className="px-10 py-10 mx-5">
        <button
          className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300"
          onClick={() => setOpenModal(true)}
        >
          Open Modal 1st
        </button>
        {openModal && <ModalLogin closeModal={setOpenModal} />}
        <button
          className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300"
          onClick={() => setOpenModalPassword(true)}
        >
          Open Modal password
        </button>
        {openModalPassword && <Modalloginpassword closeModal={setOpenModalPassword} />}
        <button
          className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300"
          onClick={() => setOpenModalCreate(true)}
        >
          Open Create
        </button>
        {openModalCreate && <Modallogincreate closeModal={setOpenModalCreate} />}
        <button
          className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300"
          onClick={() => setOpenModalChangePass(true)}
        >
          Open Modal Change Password
        </button>
        {openModalChangePass && <Modalchangepassword closeModal={setOpenModalChangePass} />}
        {/* <button
          className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300"
          onClick={() => setOpenModal(true)}
        >
          Open Change Pass suc
        </button>
        {openModalChangeSucc && <Modalchangepasswordsuccess closeModal={setOpenModalChangeSucc} />} */}
      </div>
      
        <div class="bg-black text-white py-20">
          <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
                TechFest
              </h1>
              <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                Space : The Timeless Infinity
              </h2>
              <p class="text-sm md:text-base text-gray-50 mb-4">
                Explore your favourite events and register now to showcase your
                talent and win exciting prizes.
              </p>
              <span class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                Explore Now
              </span>
            </div>
            <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div class="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    class="inline-block mt-28  xl:block"
                    alt=""
                    src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    alt=""
                    src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                  />
                </div>
                <div>
                  <img
                    class="inline-block mt-28 lg:block"
                    alt=""
                    src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
      <div className="container  bg-blue-400 mx-auto flex flex-col items-center pt-20">
        <h1 className="text-3xl">Trending Projects</h1>
        <div className="flex flex-row flex-wrap justify-between py-20">
          <Cardproject />
          <Cardproject />
          <Cardproject />
          <Cardproject />
        </div>
      </div>
    </>
  );
}

export default Landing;
