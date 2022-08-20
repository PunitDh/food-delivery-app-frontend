import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

const Parent = ({ Component }) => {
  return (
    <div className="App">
      <Header />

      <Component />

      <Navbar />
    </div>
  );
};

export default Parent;
