import React, { useEffect, useState } from "react";
import { FaHome, FaBuromobelexperte } from "react-icons/fa";
import { AiFillSetting, AiFillMessage } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdOutlineCampaign } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { removeToken } from "../../helpers/localStorage";
import axios from "../../config/axios";

function UserDirectSideNav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        axios
            .get("/users/get-user")
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div>
            <div className="flex justify-center items-center my-4 -ml-20">
                <Link to="/user/profile/manage">
                    <img src={user?.avatar} alt="" className="rounded-full w-20" />
                </Link>
                <div className="mx-4">
                    <p className="text-2xl">{user.username}</p>
                    <button
                        onClick={() => {
                            removeToken();
                            window.location.reload();
                        }}
                    >
                        Log out
                    </button>
                </div>
            </div>
            <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
                <FaHome className="mr-2 text-xl" />
                <Link to="/dashboard">
                    <h1>Home</h1>
                </Link>
            </div>
            <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
                <AiFillSetting className="mr-2 text-xl" />
                <Link to="/dashboard/preference">
                    <h1>Preferences</h1>
                </Link>
            </div>
            <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
                <FaBuromobelexperte className="mr-2 text-xl" />
                <Link to="/dashboard/mypledge">
                    <h1>My pledges</h1>
                </Link>
            </div>

            <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
                <h1 className="font-bold text-l">Creating</h1>
            </div>
            <div className="flex justify-start items-center my-4 mx-4 cursor-pointer">
                <MdOutlineSpaceDashboard className="mr-2 text-xl" />
                <Link to="/dashboard/creator">
                    <h1>Creator Dashboard</h1>
                </Link>
            </div>
        </div>
    );
}

export default UserDirectSideNav;
