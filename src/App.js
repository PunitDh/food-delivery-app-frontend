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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
            loggedIn ? <Parent Component={Main} /> : <Navigate to="/login" />
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
      </Routes>
    </Router>
  );
}

export default App;
