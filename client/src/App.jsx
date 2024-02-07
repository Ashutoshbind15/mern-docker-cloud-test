import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URI}/api/test`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Hello from client!</h1>
    </div>
  );
}

export default App;
