/** @format */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/RecipeContext";

const AddRecipes = () => {
  const { recipeData, setRecipeData } = useContext(MyStore);
  const { register, handleSubmit, reset } = useForm();

  const formData = (data) => {
    const updatedArr = [...recipeData, data];

    localStorage.setItem("recipes", JSON.stringify(updatedArr));

    setRecipeData(updatedArr);

    console.log(updatedArr);

    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-semibold text-center text-green-600">
          Add a New Recipe
        </h2>

        <form onSubmit={handleSubmit(formData)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Recipe Name
            </label>
            <input
              {...register("name")}
              type="text"
              name="name"
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
              {...register("ingredients")}
              name="ingredients"
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
              {...register("cookingTime")}
              name="cookingTime"
              placeholder="e.g. 30"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Price (in $)
            </label>
            <input
              type="number"
              {...register("price")}
              name="Price"
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
              {...register("difficulty")}
              name="difficulty"
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
              {...register("image")}
              type="url"
              // accept="image/*"
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
