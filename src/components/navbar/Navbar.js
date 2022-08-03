import styled from "@emotion/styled";
import "./navbar.css";
import {
  AccountBalanceRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import MenuLink from "./menu/MenuLink";

const Container = styled.div({
  position: "fixed",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "60px",
  backgroundColor: "#D5D5D5",
  borderRadius: "25px 25px 0 0",
  zIndex: "101",
});

const Menu = styled.ul({
  display: "flex",
});

const Indicator = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  background-color: #fa901c;
  border-radius: 100vw;
  top: -50%;
  border: 6px solid #faf9fb;
  transition: 0.5s;
`;

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(0);

  const indicator = useRef();

  useEffect(() => {
    indicator.current.style.transform = `translateX(calc(60px * ${activeNav}))`;
  }, [activeNav]);

  console.log({ activeNav });

  return (
    <Container>
      <Menu>
        <MenuLink
          link={"#"}
          icon={<HomeRounded className="menu-link-icon" />}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          navId={0}
        />
        <MenuLink
          link={"#"}
          icon={<Chat className="menu-link-icon" />}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          navId={1}
        />
        <MenuLink
          link={"#"}
          icon={<AccountBalanceRounded className="menu-link-icon" />}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          navId={2}
        />
        <MenuLink
          link={"#"}
          icon={<Favorite className="menu-link-icon" />}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          navId={3}
        />
        <MenuLink
          link={"#"}
          icon={<SummarizeRounded className="menu-link-icon" />}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          navId={4}
        />
        <MenuLink
          link={"#"}
          icon={<Settings className="menu-link-icon" />}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          navId={5}
        />

        <Indicator className="menu-indicator" ref={indicator}></Indicator>
      </Menu>
    </Container>
  );
};

export default Navbar;
