import axios from "../../../config/axios";
import React, { useEffect, useState } from "react";
import CampaignCard from "../project/CampaignCard";

function UDMyPledge() {
    const [myPledges, setMyPledges] = useState([]);

    useEffect(() => {
        axios
            .get("/pledges/get-by-user-id")
            .then((res) => {
                setMyPledges(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div className="w-10/12 mx-auto">
            <div className="flex justify-between items-center border border-gray-300 rounded-lg bg-gray-100">
                <h1 className="text-xl font-bold mx-4 my-4">My pledges</h1>
            </div>
            <div className="flex justify-start flex-wrap my-4">
                {myPledges.map((elem, idx) => (
                    <CampaignCard key={idx} {...elem} />
                ))}
            </div>
        </div>
    );
}

export default UDMyPledge;
