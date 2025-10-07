// import React from 'react'
// import { Routes } from 'react-router-dom'
// import Home from '../Home'
// import AddRecipes from '../AddRecipes'
// import Chef from '../Chef'
// import Recipes from '../Recipes'
// import Sign from '../Sign'
// const Routing = () => {
//   return (
//     <div>
//         <Routes path='/' element={<Home/>}  />
//         <Routes path='/recipes' element={<Recipes/>}  />
//         <Routes path='/chef' element={<Chef/>}  />
//         <Routes path='/addRecipes' element={<AddRecipes/>}  />
//         <Routes path='/sign' element={<Sign/>}  />
//     </div>
//   )
// }

// export default Routing
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AddRecipes from "../components/AddRecipes";
import Chef from "../components/Chef";
import Recipes from "../components/Recipes";
import Sign from "../components/Sign";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/chef" element={<Chef />} />
      <Route path="/addRecipes" element={<AddRecipes />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  );
};

export default Routing;
