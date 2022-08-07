import styled from "@emotion/styled";
import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";
import "./menu.css";

const Container = styled.div(({ isActive }) => ({
  width: "80px",
  minWidth: "80px",
  height: "100px",
  borderRadius: "10px",
  background: isActive ? "#FAF9FB" : "#F8901C",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "5px",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
  transition: "0.5s",
  cursor: "pointer",
  marginRight: "12px",
  "&:hover": {
    background: "#D8801C",
  },
}));

const ImgBox = styled.div({
  width: "40px",
  height: "40px",
  minWidth: "40px",
  minHeight: "40px",
  borderRadius: "100vw",
  background: "#F8901C",
  padding: "2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.5s",
  overflow: "hidden",
});

const MenuItemHeading = styled.h3({
  fontSize: "14px",
  fontWeight: "500",
  transition: "0.5s",
});

const LoadMenu = styled.i({
  width: "20px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  background: "#F8901C",
  transition: "0.5s",
});

const MenuItem = ({ image, name, isActive }) => {
  return (
    <Container isActive={isActive}>
      <ImgBox>
        <img src={image} alt="" className="menu-item-image" />
      </ImgBox>

      <MenuItemHeading>{name}</MenuItemHeading>

      <LoadMenu>
        <ChevronRightRounded className="load-menu-arrow" />
      </LoadMenu>
    </Container>
  );
};

export default MenuItem;
