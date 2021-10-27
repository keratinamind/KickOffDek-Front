import React from "react";

function PaymentDetail() {
  return (
    <>
      <div className="flex items-center justify-center my-3">
        <h1 className="text-2xl font-medium">Enter payment details</h1>
      </div>

      <div className="flex flex-col mx-auto items-center shadow-lg w-96 h-144">
        <div className="my-3 px-5 w-full">
          <label
            htmlFor="email"
            className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            Card Number
          </label>
          <input
            type="number"
            id="cardNumber"
            name="cardNumber"
            required
            className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="1234 5678 9000 0000"
          />
          <p className="text-xs pt-2 text-red-700">Input your card number!</p>
        </div>
        <div className="my-3 flex flex-row px-5">
          <div className="mr-2 w-1/2">
            <label
              htmlFor="expire"
              className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
            >
              Expiry
            </label>
            <input
              type="month"
              id="expire"
              name="expire"
              required
              className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="expire"
            />
            <p className="text-xs pt-2 text-red-700">Input your Expire date!</p>
          </div>
          <div className="ml-2 w-1/2">
            <label
              htmlFor="cvc"
              className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100"
            >
              CVC
            </label>
            <input
              type="number"
              id="cvc"
              name="cvc"
              required
              className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="999"
            />
            <p className="text-xs pt-2 text-red-700">Input your Email!</p>
          </div>
        </div>
        <div className="my-3 px-5 w-full">
          <label
            htmlFor="holderName"
            className="pb-2 text-sm font-medium text-gray-800 dark:text-gray-100"
          >
             Card Holder Name
          </label>
          <input
            type="text"
            id="holderName"
            name="holderName"
            required
            className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="Simon De La Rey"
          />
          <p className="text-xs pt-2 text-red-700">Input your card holder name!</p>
        </div>
        <div className="my-3 px-5 w-full">
          <label
            htmlFor="tel"
            className="pb-2 text-sm font-medium  text-gray-800 dark:text-gray-100"
          >
            Contact Number
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
            placeholder="+75 856 98621"
          />
          <p className="text-xs pt-2 text-red-700">Input your Contact Number!</p>
        </div>
      </div>
      <div className="flex items-center mt-10">
        <h1 className="mx-3 text-xs">
          Your payment information is processed through Braintree. To complete
          transactions, we store the card type, last four digits, expiration,
          and name on the card for display purposes. By pledging you agree to
          Pozible's T&Cs and Privacy Policy.
        </h1>
      </div>
    </>
  );
}

export default PaymentDetail;
