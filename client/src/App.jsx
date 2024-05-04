import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./componenets/Nav"
import Footer from "./componenets/Footer"
import Main from "./componenets/Main"

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
