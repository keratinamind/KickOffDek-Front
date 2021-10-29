import React, { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import CardRewardPreview from "../../reuse/CardRewardPreview";
import RewardConfigBoxAdditional from "../../reuse/reward/RewardConfigBoxAdditional";
import { Link, useLocation } from "react-router-dom";
import axios from "../../../config/axios";
import { useEditorContext } from "../../../contexts/EditorContext";

function RewardConfigThird() {
    const { project } = useEditorContext();
    const location = useLocation();
    console.log(location);

    const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const clickComplete = async () => {
        try {
            const { title, description, image, estDelivery, limit, maxPerPledge, minPledge } = location.state;
            const formData = new FormData();
            console.log(estDelivery.split("-")[1]);
            console.log(month[estDelivery.split("-")[1] - 1]);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("reward-image", image);
            formData.append("estDeliveryMonth", month[estDelivery.split("-")[1] - 1]);
            formData.append("estDeliveryYear", estDelivery.split("-")[0]);
            formData.append("limit", limit);
            formData.append("maxPerPledge", maxPerPledge);
            formData.append("projectId", project.id);
            const res = await axios.post("/rewards/create", { projectId: project.id });
            const res2 = await axios.put(`/rewards/update/${res.data.id}`, formData);
            alert(res2.data?.msg);
        } catch (err) {
            console.dir(err);
        }
    };
    return (
        <>
            <div className="h-screen overflow-auto">
                <div className="w-full h-1 bg-blue-200 rounded-full">
                    <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <div className="flex flex-row justify-between mt-10 mx-5">
                            <div className="flex flex-row items-center">
                                <Link to="/project/setup/rewards/new2">
                                    <HiArrowNarrowLeft className="text-xl mr-3" />
                                </Link>
                                <h1 className="font-semibold text-xl">Profile Details</h1>
                            </div>
                            <div className="flex flex-row items-center justify-between ">
                                <div>
                                    <Link to="/project/setup/rewards">
                                        <button
                                            className="bg-green-700 hover:bg-green-800 h-8 w-24 px-2 text-md text-white rounded-lg"
                                            onClick={clickComplete}
                                        >
                                            Complete
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <RewardConfigBoxAdditional />
                    </div>
                    <div className="w-1/2 flex justify-center mx-5 my-10 border border-gray-300 rounded-xl">
                        <CardRewardPreview />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RewardConfigThird;
