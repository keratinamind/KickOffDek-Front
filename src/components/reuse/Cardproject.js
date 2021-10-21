import React from 'react'

function Cardproject() {
    return (
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg w-64 cursor-pointer m-auto mx-3">
            <div className="w-full block h-full">
              <img
                className="h-56 w-full object-cover"
                alt=""
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              />
              <div className="bg-white w-full p-4 flex flex-col pt-8">
                <div className="w-full h-4 bg-blue-200 rounded-full">
                  <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex flex-start justify-between pt-8">
                  <p className="text-gray-900 text-2xl">AU$104,968</p>
                  <p className="text-gray-900 text-2xl">3</p>
                </div>
                <div className="flex flex-start justify-between">
                  <p className="text-blue-700 text-md">of $120,000 stretch</p>
                  <p className="text-gray-900 text-md">days left</p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Cardproject
