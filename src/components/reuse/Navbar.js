import React, { useState } from "react";
import img from "../../images/KICKOFFDEK (2).png";
import { HiSearch } from "react-icons/hi";
//ohm added
import { Link } from "react-router-dom";
import ModalLogin from "../features/login/ModalLogin";
import Modalloginpassword from "../features/login/ModalLoginPassword";
import Modallogincreate from "../features/login/ModalLoginCreate";
import Modalchangepassword from "../features/login/ModalChangePassword";
import { useAppContext } from "../../contexts/AppContext";

function Navbar() {
  const { isAuth } = useAppContext();
    const [checkedEmail, setCheckedEmail] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(false);
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openModalChangePass, setOpenModalChangePass] = useState(false);
    // const user = false;
    return (
        <>
            {!isAuth ? (
                <nav className="flex justify-between bg-green-800 text-white  w-full">
                    <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
                        <div className="flex flex-row align-center">
                            <Link to="/">
                                <img className="h-12 rounded-md drop-shadow-sm" src={img} alt="logo" />
                            </Link>
                            <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
                                <li>
                                    <Link to="/explore">
                                        <span className="hover:text-gray-200">Explore</span>
                                    </Link>
                                </li>
                                <li>
                                    <span className="hover:text-gray-200">About</span>
                                </li>
                                <Link to="/create/verify">
                                    <span className="hover:text-gray-200">Create</span>
                                </Link>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="hidden md:flex px-4 mx-auto  space-x-12">
                                <li className="flex align-center items-center">
                                    <HiSearch />
                                    <span className="hover:text-gray-200">Search</span>
                                </li>

                                <li>
                                    <button
                                        className="inline-flex   bg-purple-600 text-white rounded-full h-8 w-20 px-3 justify-center items-center hover:bg-purple-300"
                                        onClick={() => setOpenModal(true)}
                                    >
                                        Login
                                    </button>
                                    {openModal && (
                                        <ModalLogin
                                            setCheckedEmail={setCheckedEmail}
                                            closeModal={setOpenModal}
                                            setOpenModalPassword={setOpenModalPassword}
                                            setOpenModalCreate={setOpenModalCreate}
                                        />
                                    )}
                                    {openModalPassword && (
                                        <Modalloginpassword
                                            checkedEmail={checkedEmail}
                                            closeModal={setOpenModalPassword}
                                            setOpenModal={setOpenModal}
                                            setOpenModalChangePass={setOpenModalChangePass}
                                        />
                                    )}
                                    {openModalCreate && (
                                        <Modallogincreate
                                            checkedEmail={checkedEmail}
                                            closeModal={setOpenModalCreate}
                                            setOpenModal={setOpenModal}
                                            setOpenModalChangePass={setOpenModalChangePass}
                                        />
                                    )}
                                    {openModalChangePass && <Modalchangepassword closeModal={setOpenModalChangePass} />}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            ) : (
                <nav className="flex justify-between bg-green-800 text-white w-full">
                    <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
                        <div className="flex flex-row align-center">
                            <Link to="/">
                                <img className="h-12 rounded-md drop-shadow-sm" src={img} alt="logo" />
                            </Link>

                            <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
                                <li>
                                    <Link to="/explore">
                                        <span className="hover:text-gray-200">Explore</span>
                                    </Link>
                                </li>
                                <li>
                                    <span className="hover:text-gray-200">About</span>
                                </li>
                                <li>
                                    <Link to="/create/verify">
                                        <span className="hover:text-gray-200">Create</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="hidden md:flex px-4 mx-auto  space-x-12">
                                <li className="flex align-center items-center">
                                    <HiSearch />
                                    <span className="hover:text-gray-200">Search</span>
                                </li>

                                <li>
                                    <Link to="/dashboard">
                                        <button className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300">
                                            Dashboard
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}

            {isAuth && (
                <nav className="flex justify-between bg-white text-white w-full">
                    <div className="px-5 xl:px-12 py-3 flex w-full items-center justify-between">
                        <div className="flex flex-row align-center">
                            <img className="h-12 rounded-md drop-shadow-sm" src={img} alt="logo" />

                            <ul className="hidden md:flex px-4 mx-auto items-center font-heading space-x-12">
                                <li>
                                    <span className="hover:text-gray-200">Explore</span>
                                </li>
                                <li>
                                    <span className="hover:text-gray-200">About</span>
                                </li>
                                <li>
                                    <span className="hover:text-gray-200">Create</span>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="hidden md:flex px-4 mx-auto  space-x-12">
                                <li className="flex align-center items-center">
                                    <HiSearch />
                                    <span className="hover:text-gray-200">Search</span>
                                </li>

                                <li>
                                    <button className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300">
                                        Create Project
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Navbar;
