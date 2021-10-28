import axios from "../../../config/axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../reuse/Navbar";
import UserDirectSideNav from "../../reuse/UserDirectSideNav";
import UDMyProject from "./UDMyProject";

function CreatorDB() {
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        axios
            .get("/projects/get-by-user-id")
            .then((res) => {
                console.log(res.data);
                setMyProjects(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-12 my-10">
                <div className="col-span-3">
                    <UserDirectSideNav />
                </div>
                <div className="col-span-9">
                    <h1 className="text-xl font-bold mx-4 my-4">My projects</h1>
                    <hr />
                    {myProjects.map((elem) => (
                        <UDMyProject key={elem.id} {...elem} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default CreatorDB;
