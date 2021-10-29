import React, { useEffect, useState } from "react";
import Cardreward from "../../reuse/Cardreward";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEditorContext } from "../../../contexts/EditorContext";
import axios from "../../../config/axios";

function RewardHome() {
    const { project } = useEditorContext();
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        axios
            .get(`/rewards/get-by-project-id/${project.id}`)
            .then((res) => {
                setRewards(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div>
            <div className="flex justify-between mt-7 mx-5">
                <div className="flex flex-row items-center">
                    <Link to={{ pathname: "/project", state: { projectId: project.id } }}>
                        <HiArrowNarrowLeft className="text-xl mr-3" />
                    </Link>
                    <h1 className="font-semibold text-xl">Rewards</h1>
                </div>
                <div className="">
                    <Link to="/project/setup/rewards/new1">
                        <button className="flex flex-row bg-green-700 text-white rounded-lg hover:bg-green-900 h-10 items-center text-md w-32 justify-center">
                            <BsPlusLg className="text-sm" />
                            <span className="mx-1">Add new</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex w-full justify-center">
                {rewards.map((elem) => (
                    <Cardreward key={elem.id} {...elem} />
                ))}
            </div>
        </div>
    );
}

export default RewardHome;
