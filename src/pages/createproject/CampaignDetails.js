import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace, MdCheck } from "react-icons/md";
import Cardproject from "../../components/reuse/Cardproject";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/reuse/Navbar";
import { Link, useLocation } from "react-router-dom";
import axios from "../../config/axios";

function CampaignDetails() {
    const location = useLocation();
    console.log(location);
    const [input, setInput] = useState({ title: "", currency: "", target: "", endDate: new Date() });
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        axios
            .get("/currencies/get-all")
            .then((res) => {
                setCurrencies(res.data);
                setInput((currentState) => ({ ...currentState, currency: res.data[0] }));
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    const handleChangeInput = (e) => {
        setInput((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
    };

    const url = "https://picsum.photos/1700/1000";
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <div className="flex flex-col justify-center py-5 px-2">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <Link to="/create/type">
                                    <MdKeyboardBackspace className="text-2xl mr-2" />
                                </Link>
                                <h1 className="text-xl font-bold mr-8">Campaign Details</h1>
                            </div>
                            <Link
                                to={{
                                    pathname: "/create/visual",
                                    state: { ...location?.state, ...input },
                                }}
                            >
                                <button className="py-1 px-4 border border-gray-700 rounded-xl bg-green-700 text-white">
                                    Next
                                </button>
                            </Link>
                        </div>
                        <div className="w-10/12 mx-auto flex flex-col">
                            <h1 className="my-5">Overview</h1>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="border border-gray-500 my-2 p-2"
                                placeholder="Campaign Title"
                                value={input.title}
                                onChange={handleChangeInput}
                            />

                            <select
                                name="currency"
                                id="currency"
                                className="border border-gray-500 my-2 p-2"
                                value={input.currency}
                                onChange={handleChangeInput}
                            >
                                {currencies.map((elem) => (
                                    <option key={elem.id} value={elem.name}>
                                        {elem.name}
                                    </option>
                                ))}
                            </select>
                            <div>
                                <label htmlFor="" className="p-2 bg-purple-500 rounded-l-sm text-white">
                                    USD
                                </label>
                                <input
                                    type="number"
                                    name="target"
                                    min="0"
                                    className="border border-gray-500 my-2 p-2"
                                    value={input.target}
                                    onChange={handleChangeInput}
                                />
                            </div>
                        </div>
                        <div className="border border-gray-500 my-2 p-2">
                            <DatePicker
                                selected={input.endDate}
                                onChange={(date) => setInput((currentState) => ({ ...currentState, endDate: date }))}
                                // locale="pt-BR"
                                showTimeSelect
                                timeFormat="p"
                                timeIntervals={15}
                                dateFormat="Pp"
                            />
                        </div>
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

export default CampaignDetails;
