import React from "react";
import Navbar from "../../components/reuse/Navbar";
import { useLocation, useHistory } from "react-router-dom";
import axios from "../../config/axios";

function ProjectCreated() {
    const history = useHistory();
    const location = useLocation();
    console.log(location);

    const clickToProjectEditor = async () => {
        try {
            const res = await axios.post("/projects/create", { typeId: location.state?.typeId });
            history.push("/project", { projectId: res.data?.id });
        } catch (err) {
            console.dir(err);
        }
    };

    const clickSaveDraft = async () => {
        try {
            const res = await axios.post("/projects/create", { typeId: location.state?.typeId });
            history.push("/dashboard/creator");
        } catch (err) {
            console.dir(err);
        }
    };

    const url = "https://picsum.photos/400/300";
    return (
        <>
            <Navbar />
            <div className="w-10/12 mx-auto flex justify-center">
                <div className="flex flex-col items-center">
                    <img src={url} alt="" className="my-5" />
                    <h1>Project created!</h1>
                    <h1 className="mb-10">
                        There are only few things left like adding your payment details and setting up your rewards.
                        Would you like to do it now?
                    </h1>
                    <div className="flex flex-col">
                        <button onClick={clickToProjectEditor}>
                            <button className="border border-gray-500 p-2 my-2 rounded-lg bg-purple-600">
                                Go to Project Editor
                            </button>
                        </button>
                        <button className="p-2 my-2" onClick={clickSaveDraft}>
                            Save draft and do it later
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCreated;
