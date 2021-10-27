import React from "react";
import CardRewardNoButton from "../../reuse/CardRewardNoButton";
import CardRewardPreview from "../../reuse/CardRewardPreview";
import ValidateUser from "./ValidateUser";

function CheckoutSummary() {
  return (
    <div className="container mx-auto flex flex-col my-3 md:my-6">
      {/* Heading */}
      <div className="my-3 flex-col">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            1
          </h1>
          <h1 className="mx-3">Your pledge</h1>
          <h1 className="text-sm">Endangered Species Plush</h1>
        </div>
        {/* Divide 2 sections */}

        <div className="flex flex-row h-144 justify-center">
          <div className="w-1/2">
            <div className="flex items-center justify-center my-3">
              <h1 className="text-2xl font-medium">Choose your reward</h1>
            </div>
            <div className="grid grid-cols-3 gap-3 mr-7 my-5">
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
              <button className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900">
                {" "}
                2$ or More
              </button>
            </div>
            <div className="flex flex-row">
              <div className="mt-7 flex flex-col mx-3">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm  text-gray-800 dark:text-gray-100"
                >
                  Amount
                </label>
                <div className="flex flex-row items-center">
                  <span className="rounded-left border border-gray-300 pl-3 py-3 text-sm">US$</span>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="border w-48 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 rounded-r text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="FirstName"
                  />
                </div>
              </div>
              <div className="mt-7 flex flex-col mx-3">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm  text-gray-800 dark:text-gray-100"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  required
                  className="border w-24 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Quantity"
                />
              </div>
              <div className="mt-7 flex flex-col mx-3">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm  text-gray-800 dark:text-gray-100"
                >
                  Shipping
                </label>
                <select
                  id="shipping"
                  name="shipping"
                  required
                  className="border w-48 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Shipping"
                >
                  <option>International - US%10</option>
                  <option>Pickup at Bangkok - US%10</option>
                  <option>EMS - US%2</option>
                </select>
              </div>
            </div>
            <div className="flex items-center mt-10">
              <input
                className="text-green-800 bg-green-900 w-5 h-5"
                type="checkbox"
              />
              <h1 className="mx-3">Don't list my pledge publicly</h1>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-center w-1/2">
            {/* Pledge Summary */}
            <div className="w-72 border border-gray-300 rounded-xl my-3">
              <div className="flex  justify-center my-4 text-2xl">
                Pledge Summary
              </div>
              <div className="flex flex-row justify-between px-4 my-1">
                <span>1x AU$50(Edit)</span>
                <span>US$50</span>
              </div>
              <div className="flex flex-row justify-between px-4 my-1">
                <span>Shipping</span>
                <span>US$5</span>
              </div>
              <div className="flex flex-row justify-between px-4 my-3 font-semibold">
                <span>Total</span>
                <span>US$55</span>
              </div>
            </div>
            {/* Card details */}
            <div>
              <CardRewardNoButton />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-xl text-white bg-green-700 hover:bg-green-800 w-16 h-10 text-md font-semibold mx-3">
            Back
          </button>
          <button className="rounded-xl text-white bg-purple-700 hover:bg-purple-800 w-16 h-10 text-md font-semibold mx-3">
            Next
          </button>
        </div>
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
        <ValidateUser />
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            3
          </h1>
          <h1 className="mx-3">Your payments</h1>
          <h1>Endangered Species Plush</h1>
        </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            4
          </h1>
          <h1 className="mx-3">Your shipping</h1>
          <h1>Endangered Species Plush</h1>
        </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
      <div className="my-1">
        <div className="flex flex-row items-center">
          <h1 className="flex rounded-full h-8 w-8 bg-green-800 text-white items-center justify-center">
            5
          </h1>
          <h1 className="mx-3">Your summary</h1>
          <h1>Endangered Species Plush</h1>
        </div>
        <div className="w-full bg-gray-300 h-px my-3"></div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
