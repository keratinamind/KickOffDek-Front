import axios from "axios";
import React, { useEffect, useState } from "react";

function Cardproject({ campaignImage, target, projectId, currency }) {
    const [pledge, setPledge] = useState([]);

    useEffect(() => {
        try {
            async function fetchProject() {
                const res = await axios.get(`http://localhost:8888/pledges/get-by-project-id/${6}`, {
                    headers: {
                        authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJpemViZXJnIiwiaWF0IjoxNjM1MzI4MDk4LCJleHAiOjE2MzU5MzI4OTh9.zh4TqRdTHBOnu5of22AK1qt4-c6VKtbYGj06A5Pu2vI",
                    },
                });
                setPledge(res.data);
            }
            fetchProject();
        } catch (err) {
            console.dir(err);
        }
    }, []);

    const totalPledge = pledge.reduce((total, elem) => total + +elem.amount, 0);
    return (
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg w-64 cursor-pointer m-auto mx-3">
            <div className="w-full block h-full">
                <img className="h-56 w-full object-cover" alt="" src={`${campaignImage}`} />
                <div className="bg-white w-full p-4 flex flex-col pt-8">
                    <div className="w-full h-4 bg-blue-200 rounded-full">
                        <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="flex flex-start justify-between pt-8">
                        <p className="text-gray-900 text-2xl">{currency}${totalPledge}</p>
                        <p className="text-gray-900 text-2xl">3</p>
                    </div>
                    <div className="flex flex-start justify-between">
                        <p className="text-blue-700 text-md">of ${target} stretch</p>
                        <p className="text-gray-900 text-md">days left</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardproject;
