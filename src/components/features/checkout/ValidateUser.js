import React from 'react'

function ValidateUser() {
    return (
        <div className="w-144 h-72 rounded-xl border border-gray-300 shadow-lg px-10">
            <h1 className="my-5">Your are current Login as</h1>
            <h1 className="h-16 w-16 rounded-full bg-green-900 text-white flex items-center justify-center">LOL</h1>
            <h1 className="my-5">The Guy You Know</h1>
            <span className="text-gray-800 text-sm">If this isn't you - </span><span className="text-green-800 text-sm">sign-in with a different account</span>
        </div>
    )
}

export default ValidateUser
