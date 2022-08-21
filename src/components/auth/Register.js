import { Button, Input } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Container, AuthContainer, AuthHeader, AuthLinks } from "./authStyles";
import { createNewUser } from "../../api/auth";
import Notification from "../notification/Notification";
import { useNotification } from "../../hooks/useNotification";

const Login = () => {
  const notification = useNotification();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    // console.log(user, e);
    createNewUser(user)
      .then((response) => {
        notification.set("User creation success", notification.SUCCESS);

        console.log(response.data);
      })
      .catch((error) => {
        notification.set(error.response.data.message, notification.ERROR);
      });
  };
  return (
    <Container>
      <Notification notification={notification} />
      <AuthContainer>
        <AuthHeader>REGISTER FORM</AuthHeader>

        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            sx={{ width: "100%" }}
            name="firstname"
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            sx={{ width: "100%" }}
            name="lastname"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            sx={{ width: "100%" }}
            name="email"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            sx={{ width: "100%" }}
            name="password"
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            sx={{ width: "100%" }}
            name="confirmPassword"
            required
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
          Already have an account ?<Link to="/">Login here</Link>
        </AuthLinks>
      </AuthContainer>
    </Container>
  );
};

export default Login;
