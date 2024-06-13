import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/register/register";
import Login from "./components/login/login";

function App() {
  return (
    <>
      {/* <Register></Register>{" "} */}
      <Login></Login>
    </>
  );
}

export default App;
