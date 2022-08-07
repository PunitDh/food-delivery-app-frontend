import styled from "@emotion/styled";
import React from "react";
import MenuItem from "./MenuItem";
import BurgerImage from "../../../assets/images/burger.png";
import PizzaImage from "../../../assets/images/pizza.png";

const Container = styled.div({
  width: "100%",
  padding: "10px 0",
});

const Menucard = styled.div({
  width: "100%",
});

const RowContainer = styled.div({
  display: "flex",
  alignItems: "center",
  overflowX: "scroll",
  overflowY: "hidden",
  margin: "10px 0",
  padding: "10px 0",
});

const DishItemContainer = styled.div({});

const DishMenu = () => {
  return (
    <Container>
      <Menucard></Menucard>
      <RowContainer>
        <MenuItem image={BurgerImage} name="Burger" isActive={false} />
        <MenuItem image={PizzaImage} name="Pizza" isActive={false} />
      </RowContainer>
      <DishItemContainer></DishItemContainer>
    </Container>
  );
};

export default DishMenu;
