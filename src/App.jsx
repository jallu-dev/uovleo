import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";
import Members from "./pages/Members";
import Footer from "./components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <BrowserRouter>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Activities />} path="/activities"></Route>
        <Route element={<Contact />} path="/contact"></Route>
        <Route element={<Members />} path="/members"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// home hero
// members
// activietes karapu projects
// contact
