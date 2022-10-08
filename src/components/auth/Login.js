import { Button, Input } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import "./login.css";
import { Container, AuthContainer, AuthHeader, AuthLinks } from "./authStyles";
import { loginUser } from "../../api/authHelper";
import { useNotification } from "../../hooks/useNotification";
import Notification from "../notification/Notification";

const Login = ({ loggedIn, setLoggedIn }) => {
  const notification = useNotification();
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    loginUser(user)
      .then((response) => {
        notification.set("Login successful", notification.SUCCESS);
        localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, response.data);
        setTimeout(() => setLoggedIn(true), 1000);

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
        <AuthHeader>LOGIN FORM</AuthHeader>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <Button
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-start", marginTop: "30px" }}
          >
            Submit
          </Button>
        </form>

        {loggedIn && <Navigate to="/" />}

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
