import React, { useEffect, useState } from "react";
import Cardproject from "../../components/reuse/Cardproject";
import { MdKeyboardBackspace, MdCheck } from "react-icons/md";
import Navbar from "../../components/reuse/Navbar";
import { Link } from "react-router-dom";
import axios from "../../config/axios";

function ChooseType() {
    const [types, setTypes] = useState([]);
    const [typeId, setTypeId] = useState(0);

    useEffect(() => {
        axios
            .get("/types/get-all")
            .then((res) => {
                setTypes(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    const clickChooseType = (typeId) => {
        setTypeId(typeId);
    };

    const url = "https://picsum.photos/1700/1000";
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <div className="flex flex-col items-center justify-center py-5 px-2">
                        <div className="flex justify-between items-center mb-2">
                            <Link to="/create/verify">
                                <MdKeyboardBackspace className="text-2xl mr-2" />
                            </Link>
                            <h1 className="text-xl font-bold mr-8">Choose Type</h1>
                            <Link
                                to={{
                                    pathname: "/create/finish",
                                    state: { typeId },
                                }}
                            >
                                <button className="py-1 px-4 border border-gray-700 rounded-xl bg-green-700 text-white">
                                    Next
                                </button>
                            </Link>
                        </div>
                        {types.map((elem) => (
                            <div
                                key={elem.id}
                                className={`border border-gray-500 p-5 mb-2 rounded-lg cursor-pointer hover:bg-gray-300${
                                    typeId === elem.id ? " bg-gray-300" : ""
                                }`}
                                onClick={() => clickChooseType(elem.id)}
                            >
                                <h1 className="font-bold">{elem.name}</h1>
                                <div className="flex justify-start items-center">
                                    <MdCheck />
                                    <p>set your funding target</p>
                                </div>
                                <div className="flex justify-start items-center">
                                    <MdCheck />
                                    <p>offer reward and incentives</p>
                                </div>
                                <div className="flex justify-start items-center">
                                    <MdCheck />
                                    <p>presale, events and launches</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-9">
                    <div
                        style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
                        className="relative h-screen rounded-lg mx-5 mb-10"
                    >
                        <div className="absolute inset-x-20 inset-y-1/3 mx-2">
                            <h1 className="text-xl font-bold">Project name</h1>
                            <h1 className="text-xl mt-2">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
                            </h1>
                        </div>
                        <div className="absolute bottom-20 right-20">
                            <Cardproject />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChooseType;
