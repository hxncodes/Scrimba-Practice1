import React from "react";
import reactLogo from "../assets/react.svg";
export default function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="" srcset="" />
      {/* We can directly access using just "/" anything from public folder */}
      {/* <img src="/vite.svg" className="logo" alt="Vite logo" /> */}
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}
