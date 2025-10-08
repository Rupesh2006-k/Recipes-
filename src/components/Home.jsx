/** @format */

import React, { useContext, useState } from "react";
import { MyStore } from "../context/RecipeContext";

const Home = () => {
  const { recipeData, setRecipeData } = useContext(MyStore);
  let val = JSON.parse(localStorage.getItem("recipes"));
  const [datalist, setDataList] = useState(val || []);

console.log(datalist[0].name);
let {image , name , price ,ingredients , cookingTime } = datalist

  return (
    <div className="flex flex-wrap min-h-screen gap-4 p-2 bg-amber-50">
      {/* <div className="p-8 text-center bg-white shadow-lg h-50 rounded-2xl w-80">
        <h1 className="mb-2 text-2xl font-semibold text-amber-700">🏠 Welcome Home</h1>
        <p className="text-gray-600">
          Explore recipes, meet chefs, and sign in to save your favorites.
        </p>
        <button className="px-4 py-2 mt-4 text-white transition-all duration-200 rounded-lg bg-amber-600 hover:bg-amber-700">
          Explore Now
        </button>
      </div> */}

      {datalist?.map((elem, idx) => (
        <div key={idx} className="bg-white h-110 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden w-[20vw] min-w-[250px]">
          <img
            src={elem.image}
            alt="Fruit Mix"
            className="object-cover h-[15vw] w-full"
          />
          <div className="p-4">
            <h2 className="mb-1 text-lg font-semibold text-gray-800">
               Recipe Name:{" "}
              <span className="font-normal text-gray-600">{elem.name}</span>
            </h2>
            <p className="mb-1 text-gray-700">
              ⏱️ Cooking Time:{" "}
              <span className="font-normal text-gray-600">{elem.cookingTime}</span>
            </p>
            <p className="mb-1 text-gray-700">
              🧂 Ingredients:{" "}
              <span className="font-normal text-gray-600">
                {elem.ingredients}
              </span>
            </p>
            <p className="mb-3 text-gray-700">
              💰 Price: <span className="font-normal text-gray-600">${elem.price}</span>
            </p>
            <button className="w-full px-4 py-2 text-white transition-all duration-200 rounded-lg bg-amber-600 hover:bg-amber-700">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
