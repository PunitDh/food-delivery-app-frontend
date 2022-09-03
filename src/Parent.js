import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

const Parent = ({ Component, componentProps }) => {
  return (
    <div className="App">
      <Header />

      <Component {...componentProps} />

      <Navbar />
    </div>
  );
};

export default Parent;
