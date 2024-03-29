import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import BurgerImage from "../../../assets/images/burger.png";
import PizzaImage from "../../../assets/images/pizza.png";
import ItemCard from "./ItemCard";
import { Items } from "../../../data.js";
import { CATEGORY } from "../../../constants.js";
import axios from "axios";

const Container = styled.div({
  width: "100%",
  padding: "10px 0",
});

const MenuCard = styled.div({
  width: "100%",
});

const RowContainer = styled.div({
  display: "flex",
  alignItems: "center",
  overflowX: "scroll",
  overflowY: "hidden",
  margin: "10px 20px",
  padding: "10px 0",
});

const DishItemContainer = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignContent: "center",
  flexWrap: "wrap",
});

const SubMenuContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "20px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#2A2B3C",
});

const DishMenu = () => {
  const [currentCategory, setCurrentCategory] = useState(CATEGORY.burger);
  const [menuItems, setMenuItems] = useState(null);

  const setCategory = (category) => () => {
    setCurrentCategory(category);
    setMenuItems(menuItems?.filter((item) => item.category === category));
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/items`).then((response) => {
      setMenuItems(response.data);
    });
  }, [currentCategory]);

  return (
    <Container>
      <MenuCard>
        <SubMenuContainer>Menu Category</SubMenuContainer>
      </MenuCard>
      <RowContainer>
        <MenuItem
          image={BurgerImage}
          name="Burger"
          isActive={currentCategory === CATEGORY.burger}
          onClick={setCategory(CATEGORY.burger)}
        />
        <MenuItem
          image={PizzaImage}
          name="Pizza"
          isActive={currentCategory === CATEGORY.pizza}
          onClick={setCategory(CATEGORY.pizza)}
        />
      </RowContainer>
      <DishItemContainer>
        {menuItems
          ?.filter((item) => item.category === currentCategory)
          ?.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
      </DishItemContainer>
    </Container>
  );
};

export default DishMenu;
