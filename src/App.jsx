import { createContext, useEffect, useState } from "react";
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
import Test from "./pages/Test";
import axios from "axios";
import ProductItem from "./components/ProductItem";
import Login2 from "./pages/Login2";
import Login3 from "./pages/Login3";
import { QueryClientProvider, QueryClient } from "react-query";
import ReactQuery from "./pages/ReactQuery";
import { ReactQueryDevtools } from "react-query/devtools";

export const shop = createContext();

// new queryClient
// provider  => client

// useQuery

const client = new QueryClient({});



function App() {
  const currency = "$";
  const value = {
    products,
    currency,
  };

  return (
    <>
      <QueryClientProvider client={client}>
        <shop.Provider value={value}>
          <BrowserRouter>
            <Navbar />
            <ReactQuery />

            <div className=" sm:px-24 sm:py-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login2 />} />
              </Routes>
            </div>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </shop.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
