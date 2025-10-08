/** @format */
import React, { useState } from "react";

const Sign = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    ingredients: "",
    description: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe Submitted:", recipe);
    alert(`Recipe Submitted: ${recipe.name}`);
    setRecipe({ name: "", category: "", ingredients: "", description: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        <h2 className="mb-4 text-2xl font-bold text-center">Add Your Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="text"
            name="category"
            value={recipe.category}
            onChange={handleChange}
            placeholder="Category (Dessert, Main, Snack...)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (comma separated)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            placeholder="Description / Instructions"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
