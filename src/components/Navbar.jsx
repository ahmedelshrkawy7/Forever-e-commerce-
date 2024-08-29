import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between p-4 px-9">
      <img src={assets.logo} alt="" className="w-36" />
      <ul className="hidden  sm:flex gap-5 text-sm text-gray-700  ">
        <NavLink to="/" className="flex flex-col items-center">
          <h2>HOME</h2>
          <div className="h-0.5 bg-gray-400 w-2/4 hidden"></div>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center">
          <h2>COLLECTION</h2>
          <div className="h-0.5 bg-gray-400 w-2/4  hidden"></div>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center">
          <h2>ABOUT</h2>
          <div className="h-0.5 bg-gray-400 w-2/4 hidden"></div>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center">
          <h2>CONTACT</h2>
          <div className="h-0.5 bg-gray-400 w-2/4 hidden"></div>
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
            onClick={() => navigate("/login")}
          />
          <div className="group-hover:flex hidden absolute right-0 flex-col gap-3 p-6 rounded-lg text-gray-500 border-2 mt-2 ">
            <p className="cursor-pointer hover:text-black">login</p>
            <p className="cursor-pointer hover:text-black">logout</p>
            <p className="cursor-pointer hover:text-black">ddddddd</p>
          </div>
        </div>
        <Link to="/cart" className="relative ">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black rounded-full text-white text-[12px]">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          className="sm:hidden"
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>
      {/* side bar for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className=" flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)}>
            <img src={assets.dropdown_icon} alt="" />
            <p>back</p>
          </div>
          <NavLink to="/" className="py-2 pl-6 border">
            <h2>HOME</h2>
          </NavLink>
          <NavLink to="/collection" className="py-2 pl-6 border">
            <h2>COLLECTION</h2>
          </NavLink>
          <NavLink to="/about" className="py-2 pl-6 border">
            <h2>ABOUT</h2>
          </NavLink>
          <NavLink to="/contact" className="py-2 pl-6 border">
            <h2>CONTACT</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
