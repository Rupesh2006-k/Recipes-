import React from 'react'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <div className="p-8 text-center bg-white shadow-lg rounded-2xl w-80">
        <h1 className="mb-2 text-2xl font-semibold text-amber-700">🏠 Welcome Home</h1>
        <p className="text-gray-600">
          Explore recipes, meet chefs, and sign in to save your favorites.
        </p>
        <button className="px-4 py-2 mt-4 text-white transition-all duration-200 rounded-lg bg-amber-600 hover:bg-amber-700">
          Explore Now
        </button>
      </div>
    </div>
  )
}

export default Home
