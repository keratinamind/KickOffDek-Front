import React from "react";
import { useHistory } from "react-router";
import RewardHome from "../../components/features/projecteditor/RewardHome";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupRewardHome() {
    const history = useHistory();
    const clickNext = () => {
        history.push("/project/setup/payment");
    };
    const clickBack = () => {
        history.push("/project/setup/description");
    };
    return (
        <div className="h-screen">
            <NavProjectEditor clickNext={clickNext} clickBack={clickBack} />
            <RewardHome />
        </div>
    );
}

export default SetupRewardHome;
