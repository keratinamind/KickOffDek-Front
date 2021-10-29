import React from "react";
import { useHistory } from "react-router";
import Description from "../../components/features/projecteditor/Description";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupDescription() {
    const history = useHistory();
    const clickNext = () => {
        history.push("/project/setup/rewards");
    };
    const clickBack = () => {
        history.push("/project/setup/visual");
    };
    return (
        <div className="h-screen">
            <NavProjectEditor clickNext={clickNext} clickBack={clickBack} />
            <Description />
        </div>
    );
}

export default SetupDescription;
