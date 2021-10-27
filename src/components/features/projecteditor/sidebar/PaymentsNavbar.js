import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function PaymentsNavbar() {
  return (
    <div className="flex flex-row items-center h-16">
      <Link to="/project">
        <HiArrowNarrowLeft className="text-xl mr-3" />
      </Link>
      <h1 className="font-semibold text-xl">Payments details</h1>
    </div>
  );
}

export default PaymentsNavbar;
