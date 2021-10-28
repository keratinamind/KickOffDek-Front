import axios from "../../../config/axios";
import React, { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import RewardBar from "./RewardBar";

function ProjectInfoActivity() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios
            .get(`/updates/get-by-project-id/${6}`)
            .then((res) => {
                setActivities(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.dir(err);
            });
    }, []);

    return (
        <div className="grid grid-cols-4 w-10/12 mx-auto">
            <div className="col-span-3 mr-4">
                {activities.map((elem) => (
                    <ActivityCard key={elem.id} {...elem} />
                ))}
            </div>
            <RewardBar />
        </div>
    );
}

export default ProjectInfoActivity;
