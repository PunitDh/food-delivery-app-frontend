import React from "react";
import styled from "@emotion/styled";
import Logo from "../../assets/images/logo.png";
import User from "../../assets/images/user.jpg";
import "./header.css";

import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";

const Container = styled.header({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 15px",
  height: "60px",
  width: "100%",
  backgroundColor: "white",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "101",
  boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.1)",
});

const InputBox = styled.div({
  background: "white",
  borderRadius: "25px",
  boxShadow: "0px 3px 20px rgba(0, 0, 0, 0.15)",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  padding: "8px 15px",
  width: "120px",
});

const ShoppingCart = styled.div({
  position: "relative",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ShoppingCartContent = styled.div({
  width: "20px",
  height: "20px",
  backgroundColor: "#F8901C",
  borderRadius: "100%",
  minWidth: "20px",
  minHeight: "20px",
  position: "absolute",
  top: "-8px",
  right: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProfileContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

const ImgBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  minWidth: "40px",
});

const UserName = styled.h2({
  fontSize: "16px",
  marginLeft: "8px",
  fontWeight: "500",
  display: "none",
});

const ToggleMenu = styled.div({
  transform: "rotate(90deg)",
});

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="" className="app-logo" />

      <InputBox>
        <SearchRounded className="search-icon" />

        <input type="search" placeholder="Search" className="search-bar" />
      </InputBox>

      <ShoppingCart>
        <ShoppingCartRounded className="shopping-cart-icon" />
        <ShoppingCartContent>2</ShoppingCartContent>
      </ShoppingCart>

      <ProfileContainer>
        <ImgBox>
          <img src={User} alt="" className="app-user" />
        </ImgBox>

        <UserName>User</UserName>

        <ToggleMenu>
          <BarChart className="toggle-icon" />
        </ToggleMenu>
      </ProfileContainer>
    </Container>
  );
};

export default Header;
