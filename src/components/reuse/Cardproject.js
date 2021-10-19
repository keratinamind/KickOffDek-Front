import React from 'react'

function Cardproject() {
    return (
        <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg w-60 md:w-80 cursor-pointer m-auto mx-3">
            <a href="#" class="w-full block h-full">
              <img
                alt="blog photo"
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                class="h-56 w-full object-cover"
              />
              <div class="bg-white w-full p-4 flex flex-col pt-8">
                <div class="w-full h-4 bg-blue-200 rounded-full">
                  <div class="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex flex-start justify-between pt-8">
                  <p class="text-gray-900 text-2xl">AU$104,968</p>
                  <p class="text-gray-900 text-2xl">3</p>
                </div>
                <div className="flex flex-start justify-between">
                  <p class="text-blue-700 text-md">of $120,000 stretch</p>
                  <p class="text-gray-900 text-md">days left</p>
                </div>
              </div>
            </a>
          </div>
    )
}

export default Cardproject
