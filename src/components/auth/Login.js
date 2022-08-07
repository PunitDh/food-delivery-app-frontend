import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import React from "react";
import "./login.css";

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
});

const LoginContainer = styled.div({
  border: "1px solid #FA901C",
  width: "250px",
  height: "400px",
  borderRadius: "5px",
});

const LoginHeader = styled.div({
  background: "#FA901C",
  height: "30px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  color: "#FAF9FB",
});

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <LoginHeader>LOGIN FORM</LoginHeader>
        <form className="login-form">
          <Input type="email" placeholder="Email" sx={{ width: "100%" }} />
          <Input
            type="password"
            placeholder="Password"
            sx={{ width: "100%" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-start", marginTop: "30px" }}
          >
            Submit
          </Button>
        </form>
      </LoginContainer>
    </Container>
  );
};

export default Login;
