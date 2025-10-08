import React, { useContext } from "react";
import NavBar from "./Routing/NavBar";
import Routing from "./Routing/Routing";

const App = () => {

  return (
    <div className="w-full h-screen bg-amber-100">
      <NavBar />
      <Routing />
    </div>
  );
};

export default App;
