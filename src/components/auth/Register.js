import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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

const RegisterHere = styled.div({
  fontSize: "16px",
  margin: "0 20px",
  color: "rgba(0, 0, 0, 0.7)",
});

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <LoginHeader>REGISTER FORM</LoginHeader>
        <form className="login-form">
          <Input type="text" placeholder="First Name" sx={{ width: "100%" }} />
          <Input type="text" placeholder="Last Name" sx={{ width: "100%" }} />
          <Input type="email" placeholder="Email" sx={{ width: "100%" }} />
          <Input
            type="password"
            placeholder="Password"
            sx={{ width: "100%" }}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
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

        <RegisterHere>
          Already have an account ?<Link to="/">Login here</Link>
        </RegisterHere>
      </LoginContainer>
    </Container>
  );
};

export default Login;
