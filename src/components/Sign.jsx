import React from 'react'

const Sign = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="p-8 text-center bg-white shadow-lg rounded-2xl w-80">
        <h1 className="mb-2 text-2xl font-semibold text-blue-700">🔑 Sign In</h1>
        <p className="text-gray-600">Access your account to manage recipes and more.</p>
        <button className="px-4 py-2 mt-4 text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Sign
