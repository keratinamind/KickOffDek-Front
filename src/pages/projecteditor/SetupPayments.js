import React from "react";
import { useHistory } from "react-router";
import Identification from "../../components/features/projecteditor/Identification";
import PaymentDetails from "../../components/features/projecteditor/PaymentDetails";
import PaymentsNavbar from "../../components/features/projecteditor/sidebar/PaymentsNavbar";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupPayments() {
    const history = useHistory();
    const clickNext = () => {
        history.push("/project/setup/summary");
    };
    const clickBack = () => {
        history.push("/project/setup/payment");
    };
    return (
        <>
            <NavProjectEditor clickNext={clickNext} clickBack={clickBack} />
            <PaymentsNavbar />
            <div className="h-screen flex flex-row">
                <div className="w-1/2 bg-gray-100">
                    <PaymentDetails />
                </div>
                <div className="w-1/2 bg-gray-100">
                    <Identification />
                </div>
            </div>
        </>
    );
}

export default SetupPayments;
