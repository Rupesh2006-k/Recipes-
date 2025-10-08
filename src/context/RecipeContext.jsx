/** @format */

import React, { createContext, useState } from "react";

export const MyStore = createContext();

const RecipeContext = ({ children }) => {
  const [recipeData, setRecipeData] = useState([]);

  return (
    <MyStore.Provider value={{ recipeData, setRecipeData }}>
      {children}
    </MyStore.Provider>
  );
};

export default RecipeContext;
