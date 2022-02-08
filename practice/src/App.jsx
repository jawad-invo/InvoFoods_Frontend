import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menus from "./Pages/menus";
import Meals from "./Pages/meals";
import AboutUs from "./Pages/about";
import Payments from "./Pages/payments";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/menus" element={<Menus />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
