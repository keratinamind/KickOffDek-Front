import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Cardupdate from "../../reuse/Cardupdate";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEditorContext } from "../../../contexts/EditorContext";

function UpdateProject() {
    const { project } = useEditorContext();
    return (
        <div className="">
            <div className="flex flex-row items-center justify-between mx-10">
                <div className="flex flex-row items-center">
                    <Link to={{ pathname: "/project", state: { projectId: project.id } }}>
                        <HiArrowNarrowLeft className="text-xl mr-3" />
                    </Link>
                    <h1 className="font-semibold text-xl">Your updates</h1>
                </div>
                <Link to="/project/update/new">
                    <div className="flex flex-row items-center justify-center bg-green-800 text-white w-48 h-10 rounded-lg">
                        <BsPlusLg />
                        Add New Update
                    </div>
                </Link>
            </div>
            <div className="container mx-auto flex flex-col mt-20">
                <Cardupdate />
            </div>
        </div>
    );
}

export default UpdateProject;
