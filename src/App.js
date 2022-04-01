import React from "react";
import { Home, About, Skills } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { Contact } from "./container";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default App;
