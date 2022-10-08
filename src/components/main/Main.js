import styled from "@emotion/styled";
import React from "react";
import Banner from "./banner/Banner";
import DishMenu from "./menu/DishMenu";

const Container = styled.main({
  width: "100%",
  height: "100vh",
});
const Main = () => {
  return (
    <Container>
      <Banner name="John" discount="20" />
      <DishMenu />
    </Container>
  );
};

export default Main;
