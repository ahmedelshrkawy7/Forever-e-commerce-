import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { products } from "./assets/frontend_assets/assets";
import Login from "./pages/login";

export const shop = createContext();

function App() {
  const currency = "$";
  const value = {
    products,
    currency,
  };

  return (
    <>
      <shop.Provider value={value}>
        <BrowserRouter>
          <Navbar />

          <div className=" sm:px-24 sm:py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </shop.Provider>
    </>
  );
}

export default App;
