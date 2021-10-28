import React, { useState, useEffect } from "react";
import CardRewardNoButton from "../../reuse/CardRewardNoButton";
// import CardRewardPreview from "../../reuse/CardRewardPreview";
import ChooseRewards from "./ChooseRewards";
import PledgeSummary from "./PledgeSummary";
import ValidateUser from "./ValidateUser";
// import ButtonSets from "./ButtonSets";
// import ButtonConfirm from "./ButtonConfirm";
import PaymentDetail from "./PaymentDetail";
import PledgeType from "./PledgeType";
import ShippingDetail from "./ShippingDetail";
import PledgeSummaryAmount from "./PledgeSummaryAmount";
import axios from "../../../config/axios";
import { Link } from "react-router-dom";

function CheckoutSummary() {
  const [rewardsInfo, setRewardsInfo] = useState([]);
  const [chosenReward, setChosenReward] = useState({});
  const [chosen, setChosen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({});
  const [addressCreated, setAddressCreated] = useState({});
  const [pledgeCreated, setPledgeCreated] = useState({});
  const [Show1, setShow1] = useState(true);
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);
  const [Show5, setShow5] = useState(false);

  const total = amount * +chosenReward?.minPledge;
  // console.log(total);
  // console.log(amount);
  // console.log(shippingInfo);
  console.log(addressCreated);
  // const [projectInfo, setProjectInfo] = useState([]);
  const id = 6;
  const sendRewardsId = () => {};
  useEffect(() => {
    axios
      .get(`/rewards/get-by-project-id/${id}`)

      .then((res) => {
        setRewardsInfo(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);

  const clickNextShipping = async (e) => {
    try {
      e.preventDefault();
      await axios
        .post(`/shipping-addresses/create`, {
          recipient: shippingInfo.recipient,
          address: shippingInfo.address,
          phoneNumber: shippingInfo.phoneNumber,
          postalCode: shippingInfo.postalCode,
          province: shippingInfo.province,
          country: shippingInfo.country,
        })
        .then((res) => {
          console.log(res.data);
          setAddressCreated(res.data);
        });
    } catch (err) {
      console.dir(err);
    }
  };

  const clickConfirmPledge = async (e) => {
    try {
      await axios
        .post(`/pledges/create`, {
          rewardId: chosenReward.id,
          shippingAddressId: addressCreated.id,
          paymentId: 1,
          amount: total,
          quantity: amount,
          pledgeDate: new Date(),
        })
        .then((res) => {
          console.log(res.data);
          setPledgeCreated(res.data);
          alert(res.data);
          setShow4(false);
          setShow5(true);
        });
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="container mx-auto flex flex-col my-3 md:my-6">
      {/* Heading */}

      <div className="my-3 flex-col">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            1
          </h1>
          <h1 className="mx-3">Your pledge</h1>
          <h1 className="text-sm">{chosenReward?.title}</h1>
        </div>
        {/* Divide 2 sections */}
        {Show1 && (
          <>
            <div className="flex flex-row  justify-center">
              <div className="w-1/2">
                <ChooseRewards
                  rewards={rewardsInfo}
                  setChosen={setChosen}
                  chosenReward={chosenReward}
                  setChosenReward={setChosenReward}
                  amount={amount}
                  setAmount={setAmount}
                />
              </div>
              <div className=" flex flex-col items-center justify-center w-1/2">
                {/* Pledge Summary */}
                <PledgeSummaryAmount
                  chosenReward={chosenReward}
                  amount={amount}
                />
                {/* Card details */}
                {chosen && (
                  <div className="">
                    <CardRewardNoButton chosenReward={chosenReward} />
                  </div>
                )}
              </div>
            </div>
            {/* Button Detail Checkout */}
            <div className="flex items-center justify-center">
              <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
                Back
              </button>
              <button
                onClick={() => {
                  setShow1(false);
                  setShow2(true);
                }}
                className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3"
              >
                Next
              </button>
            </div>
          </>
        )}
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>

      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            2
          </h1>
          <h1 className="mx-3">Details</h1>
          <h1>Endangered Species Plush</h1>
        </div>
        {Show2 && (
          <>
            <ValidateUser />
            {/* Button Veryfy */}

            <div className="flex items-center justify-center">
              <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
                Back
              </button>
              <button
                onClick={() => {
                  setShow2(false);
                  setShow3(true);
                }}
                className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3"
              >
                Next
              </button>
            </div>
          </>
        )}
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>

      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            3
          </h1>
          <h1 className="mx-3">Your payments</h1>
          <h1 className="text-sm">US$ 12</h1>
        </div>
        {Show3 && (
          <>
            <div className="flex flex-row justify-center mb-5">
              <div className="w-1/2">
                <PaymentDetail />
              </div>
              <div className=" flex flex-col items-center justify-center w-1/2">
                {/* Pledge Summary */}
                <PledgeSummaryAmount
                  chosenReward={chosenReward}
                  amount={amount}
                />
                <PledgeType />
                {/* Card details */}
                <div className="">
                  <CardRewardNoButton chosenReward={chosenReward} />
                </div>
              </div>
            </div>
            {/* Button Confirm Payment*/}
            <div className="flex items-center justify-center">
              <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
                Home
              </button>
              <button
                onClick={() => {
                  setShow3(false);
                  setShow4(true);
                }}
                className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3"
              >
                Confirm
              </button>
            </div>
          </>
        )}
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>

      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            4
          </h1>
          <h1 className="mx-3">Your shipping</h1>
        </div>
        {Show4 && (
          <>
            {/* Shipping Detail */}
            <ShippingDetail setShippingInfo={setShippingInfo} />
            {/* Button */}
            <div className="flex items-center justify-center">
              <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
                Home
              </button>
              <button
                onClick={clickNextShipping}
                className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-48 h-10 text-md font-semibold mx-3"
              >
                Confirm Address
              </button>
              <button
                onClick={clickConfirmPledge}
                className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3"
              >
                Confirm Pledge
              </button>
            </div>
          </>
        )}
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>

      <div className="my-1">
        <div className="flex flex-row items-center ">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            5
          </h1>
          <h1 className="mx-3">Your summary</h1>
          <h1>Endangered Species Plush</h1>
        </div>
        {Show5 && (
          <>
            <div className="border border-gray-300 mx-auto w-2/3 rounded-lg my-10 py-10">
              <PledgeSummary
                pledgeCreated={pledgeCreated}
                chosenReward={chosenReward}
                shippingInfo={shippingInfo}
              />
            </div>
            <div className="flex items-center justify-center">
              <Link to="/">
                <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-20  h-10 text-md font-semibold mx-3">
                  Home
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-24 h-10 text-md font-semibold mx-3">
                  Dashboard
                </button>
              </Link>
            </div>
          </>
        )}
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
