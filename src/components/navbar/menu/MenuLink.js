import styled from "@emotion/styled";
import React from "react";

const Container = styled.li({
  position: "relative",
  listStyle: "none",
  width: "60px",
  height: "60px",
  zIndex: "1",
});

const IconContainer = styled.span({
  position: "relative",
  display: "block",
  lineHeight: "70px",
  textAlign: "center",
  transition: "0.5s",
});

const MenuLink = ({ link, icon, setActiveNav, activeNav, navId }) => {
  return (
    <Container>
      <a href={link} onClick={() => setActiveNav(navId)}>
        <IconContainer className={activeNav === navId ? "nav-active" : ""}>
          {icon}
        </IconContainer>
      </a>
    </Container>
  );
};

export default MenuLink;
