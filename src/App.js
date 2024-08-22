import React from "react";

import './components/style.css';
// import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Skill from "./components/Skill";
import Service from "./components/Service";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/project" element={<Project></Project>}></Route>
      <Route path="/skill" element={<Skill></Skill>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </>
  );
}

export default App;
