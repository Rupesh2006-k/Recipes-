
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeClass =
    "text-2xl font-bold border-b-2 border-white transition-all";
  const normalClass = "text-2xl hover:text-gray-200 transition-all";

  return (
    <div className="flex items-center justify-between w-full h-20 px-5 text-white bg-green-400">
      <NavLink
        to="/recipes"
        className={({ isActive }) => (isActive ? activeClass : normalClass)}
      >
        Recipes
      </NavLink>

      <div className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Home
        </NavLink>
        <NavLink
          to="/chef"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Chef
        </NavLink>
        <NavLink
          to="/addRecipes"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Add Recipes
        </NavLink>
      </div>

      <NavLink
        to="/sign"
        className={({ isActive }) => (isActive ? activeClass : normalClass)}
      >
        Signin
      </NavLink>
    </div>
  );
};

export default NavBar;
