import styled from "@emotion/styled";
import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

const Container = styled.div({
  marginTop: "60px",
});

const Parent = ({ Component, componentProps }) => {
  return (
    <div className="App">
      <Header {...componentProps} />

      <Container>
        <Component {...componentProps} />
      </Container>

      <Navbar />
    </div>
  );
};

export default Parent;
