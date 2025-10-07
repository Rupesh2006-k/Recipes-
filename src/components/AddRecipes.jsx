/** @format */
import React, { useState } from "react";

const AddRecipes = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    cookingTime: "",
    difficulty: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Added:", recipe);
    alert("Recipe added successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-semibold text-center text-green-600">
          Add a New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Recipe Name
            </label>
            <input
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              placeholder="Enter recipe name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Ingredients
            </label>
            <textarea
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              placeholder="List ingredients separated by commas"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Cooking Time */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Cooking Time (in minutes)
            </label>
            <input
              type="number"
              name="cookingTime"
              value={recipe.cookingTime}
              onChange={handleChange}
              placeholder="e.g. 30"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Difficulty
            </label>
            <select
              name="difficulty"
              value={recipe.difficulty}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Recipe Image */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Recipe Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Add Recipe Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition-all bg-green-500 rounded-lg hover:bg-green-600"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipes;
