import React from 'react'

function PaymentDetails() {
    return (
        <>
            <div>Bank Account</div>
        <div className="px-10">
            <div className="">
              <label
                htmlFor="lastName"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Account Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="LastName"
              />
              <p className="text-xs pt-2 text-red-700">Required!</p>
            </div>
            <div className="">
              <label
                htmlFor="lastName"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Account Number
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="LastName"
              />
              <p className="text-xs pt-2 text-red-700">Required!</p>
            </div>
            <div className="">
              <label
                htmlFor="lastName"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Account Address
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="LastName"
              />
              <p className="text-xs pt-2 text-red-700">Required!</p>
            </div>
            <div className="">
              <label
                htmlFor="lastName"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Bank Swift
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="LastName"
              />
              <p className="text-xs pt-2 text-red-700">Required!</p>
            </div>
            <div className="">
              <label
                htmlFor="lastName"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Bank Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="LastName"
              />
              <p className="text-xs pt-2 text-red-700">Required!</p>
            </div>
            <div className="">
              <label
                htmlFor="lastName"
                className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                Bank Address
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="border w-full border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="LastName"
              />
              <p className="text-xs pt-2 text-red-700">Required!</p>
            </div>
        </div>
        </>
    )
}

export default PaymentDetails
