import React, {useState} from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import ModalShippingOptions from "../../features/projecteditor/ModalShippingOptions"

function RewardConfigBoxAdditional() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className=" mx-5 my-5 overflow-auto shadow-xl rounded-lg px-5">
      <div className="mt-10">
        <h1>Reward overview</h1>
      </div>
      <div className="mt-7 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center border border-gray-200 rounded-lg w-96 my-10 mx-10 ">
          <MdOutlineLocalShipping className="text-2xl sm:text-5xl" />
          <h1 className="mt-3 text-md sm:text-2xl">Shipping Options</h1>
          <h3 className="mt-3 text-sm sm:text-md">
            This reward includes free shipping.
          </h3>
          <button
            className="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center hover:bg-purple-300"
            onClick={() => setOpenModal(true)}
          >
            Addtional Shipping
          </button>
          {openModal && <ModalShippingOptions closeModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
}

export default RewardConfigBoxAdditional;
