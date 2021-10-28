import React from "react";
import Navbar from "../../reuse/Navbar";
import UserDirectSideNav from "../../reuse/UserDirectSideNav";
import UDMyPledge from "./UDMyPledge";

function MyPledges() {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-12 my-10">
                <div className="col-span-3">
                    <UserDirectSideNav />
                </div>
                <div className="col-span-9">
                    <UDMyPledge />
                </div>
            </div>
        </>
    );
}

export default MyPledges;
