import React from "react";
import Identification from "../../components/features/projecteditor/Identification";
import PaymentDetails from "../../components/features/projecteditor/PaymentDetails";
import PaymentsNavbar from "../../components/features/projecteditor/sidebar/PaymentsNavbar";
import NavProjectEditor from "../../components/reuse/NavProjectEditor";

function SetupPayments() {
  return (
    <>
    <NavProjectEditor />
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
