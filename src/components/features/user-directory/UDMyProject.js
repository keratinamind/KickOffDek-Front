import React from "react";
import { useHistory } from "react-router";

function UDMyProject({ id, title, status, endDate, Type: { name } }) {
    const history = useHistory();

    const clickToProjectEditor = async () => {
        try {
            history.push("/project", { projectId: id });
        } catch (err) {
            console.dir(err);
        }
    };
    return (
        <div className="w-10/12 mx-auto">
            <div className="flex flex-col border border-gray-500 my-5 p-5 rounded-lg">
                <div className="flex justify-starts items-center">
                    <h1 className="font-bold mr-10">{title}</h1>
                    <h1 className="mr-10">Current pledge : $xxxx</h1>
                    <button className="bg-purple-600 p-3 rounded-lg text-white" onClick={clickToProjectEditor}>
                        Go to project editor
                    </button>
                </div>

                <div className="flex justify-between mt-5">
                    <div className="flex flex-col">
                        <h1>Project</h1>
                        <h1>{name}</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1>Status</h1>
                        <h1>{status}</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1>Ends</h1>
                        <h1>{endDate}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UDMyProject;
