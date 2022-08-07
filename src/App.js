import "./App.css";
import Login from "./components/auth/Login";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />

      <Login />
      <Navbar />
    </div>
  );
}

export default App;
