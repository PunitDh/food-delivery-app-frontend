import { Button, Input } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Container, AuthContainer, AuthHeader, AuthLinks } from "./authStyles";

const Login = () => {
  return (
    <Container>
      <AuthContainer>
        <AuthHeader>LOGIN FORM</AuthHeader>
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

        <AuthLinks>
          Don't have an account ?<Link to="/register">Register here</Link>
        </AuthLinks>

        <AuthLinks>
          Forgot password ? <Link to="/forgot-password">Click here</Link>
        </AuthLinks>
      </AuthContainer>
    </Container>
  );
};

export default Login;
