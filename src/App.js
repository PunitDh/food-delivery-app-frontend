import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Parent from "./Parent";
import { useState } from "react";
import { getDecodedJWT } from "./utils";
import AdminParent from "./admin/AdminParent";
import AdminUsers from "./admin/components/AdminUsers";
import AdminItems from "./admin/components/AdminItems ";
import Cart from "./components/cart/Cart";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)
  );
  // console.log(JWTDecode("fjdkif"));
  // console.log(getDecodedJWT(token));
  const [loggedIn, setLoggedIn] = useState(token && getDecodedJWT(token));

  // return (
  //   <div className="App">
  //     <Header />

  //     <Login />

  //     <Navbar />
  //   </div>
  // );

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <Parent
              Component={Login}
              componentProps={{
                loggedIn,
                setLoggedIn,
              }}
            />
          }
        />
        <Route
          exact
          path="/"
          element={
            loggedIn ? (
              <Parent
                Component={Main}
                componentProps={{ loggedIn, setLoggedIn }}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Parent
              Component={Register}
              componentProps={{
                loggedIn,
                setLoggedIn,
              }}
            />
          }
        />
        <Route
          exact
          path="/forgot-password"
          element={<Parent Component={ForgotPassword} />}
        />

        <Route exact path="/cart" element={<Parent Component={Cart} />} />

        <Route exact path="/admin" element={<Navigate to="/admin/users" />} />

        <Route
          exact
          path="/admin/users"
          element={<AdminParent Component={AdminUsers} />}
        />

        <Route
          exact
          path="/admin/items"
          element={<AdminParent Component={AdminItems} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
