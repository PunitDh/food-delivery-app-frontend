import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from "./Parent";

function App() {
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
        <Route exact path="/" element={<Parent Component={Login} />} />
        <Route exact path="/main" element={<Parent Component={Main} />} />
        <Route
          exact
          path="/register"
          element={<Parent Component={Register} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
