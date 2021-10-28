import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { FaGofore } from "react-icons/fa";
import axios from "../../../config/axios";

function ModalLogin({ setCheckedEmail, closeModal, setOpenModalPassword, setOpenModalCreate }) {
    const [email, setEmail] = useState("");
    const [err, setErr] = useState("");
    const handleChangeInput = (e) => {
        if (e.target.value.trim() === "") {
            setEmail(e.target.value);
            setErr("email is required");
        } else {
            setEmail(e.target.value);
            setErr("");
        }
    };
    const clickCheckEmail = async () => {
        try {
            const res = await axios.post("/users/check-user-email", { email });
            if (res.data?.haveAccount) {
                closeModal(false);
                setOpenModalPassword(true);
                setCheckedEmail(email);
            } else {
                closeModal(false);
                setOpenModalCreate(true);
                setCheckedEmail(email);
            }
        } catch (err) {
            console.dir(err);
        }
    };
    return (
        <div className="modalContainer">
            <div
                className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id"
            >
                <div className="absolute backdrop-filter backdrop-blur-lg  inset-0 z-0"></div>
                <div className="w-150  p-3 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    <div className="text-center p-3 flex-auto justify-center">
                        <HiOutlineX
                            className="text-gray-900 absolute right-7 hover:text-red-800"
                            onClick={() => closeModal(false)}
                        />
                        <h2 className="text-2xl py-4 text-gray-900 ">Enter your email to login or register</h2>
                        <div className="flex flex-row mx-auto justify-center text-xl items-center text-purple-800">
                            <div>
                                <div className="flex flex-row mx-auto justify-center py-3">
                                    <FaGofore />
                                    <p className="text-sm px-3 font-semibold">Login with Google</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 px-8">Or</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <label
                                    htmlFor="username"
                                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                    placeholder="example@mail.com"
                                    value={email}
                                    onChange={handleChangeInput}
                                />
                                {err && <p className="text-xs pt-2 text-red-700">{err}</p>}
                                <div className="flex items-end">
                                    <button
                                        className="relative left-24 bg-purple-600 rounded-lg font-semibold text-white text-center mt-10 px-2 py-2 w-24 transition duration-300 ease-in-out hover:purple-blue-800 mr-6"
                                        onClick={clickCheckEmail}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <p className="text-sm text-green-700">
                            By registering with an account, you agree to the T&Cs and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalLogin;
