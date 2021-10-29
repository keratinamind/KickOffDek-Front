import React, { useEffect, useState } from "react";
import axios from "../../../config/axios";

function ChooseRewards({
  rewards,
  setChosenReward,
  chosenReward,
  amount,
  setAmount,
  setChosen
}) {
  console.log(rewards);
  return (
    <>
      <div className="flex items-center justify-center my-3">
        <h1 className="text-2xl font-medium">Choose your reward</h1>
      </div>
      <div className="grid grid-cols-3 gap-3 mr-7 my-5">
        {rewards.map((elem) => (
          <button
            onClick={() => {
              setChosenReward(elem);
              setChosen(true);
            }}
            className="w-full rounded-xl bg-green-700 text-white h-10 hover:bg-green-900 focus:bg-white focus:text-green-800 focus:ring-1 focus:ring-green-800"
          >
            {elem.minPledge} or More
          </button>
        ))}
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
            <span className="rounded-left border border-gray-300 pl-3 py-3 text-sm">
              US$
            </span>
            <input
              type="text"
              id="minPledge"
              name="minPledge"
              value={chosenReward.minPledge}
              required
              className="border w-48 border-gray-300 dark:border-gray-700 hover:border-green-700 pl-3 py-3 rounded-r text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder=""
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
            max="5"
            min="1"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
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
    </>
  );
}

export default ChooseRewards;
