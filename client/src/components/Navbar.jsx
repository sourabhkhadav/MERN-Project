import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navigate=useNavigate()
  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-border-color relative transition-all ${
        location.pathname === "/" ? "bg-light" : ""
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-8" />
      </Link>

      {/* Menu Button (Mobile) */}
      <button
        className="sm:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* <img src={assets.menu_icon} alt="menu" /> */}
      </button>

      {/* Nav Links */}
      <div
        className={`
          fixed top-16 right-0 w-full h-screen
          sm:static sm:h-auto sm:w-auto
          flex flex-col sm:flex-row items-start sm:items-center
          gap-4 sm:gap-8
          border-t sm:border-0 border-border-color
          p-4 sm:p-0
          transition-transform duration-300 z-50
          ${location.pathname === "/" ? "bg-light" : "bg-white"}
          ${open ? "translate-x-0" : "translate-x-full sm:translate-x-0"}
        `}
      >
        {menuLinks.map((link) => (
          <Link
            to={link.path}
            key={link.name}
            className="text-black"
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input type="text" className="py-1.5 w-full bg-trasparent  outline-none placeholder-gray-500" placeholder="search-products" />
          <img src={assets.search_icon} alt="search"  />


        </div>

        {/* dashboard btn here */}
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
  <button  onClick={()=>navigate('/owner')} className="cursor-pointer">
    Dashboard
  </button>
        {/* login btn here */}

  <button  onClick={()=>setShowLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg">
    Login
  </button>
</div>

      </div>

      <button className="sm:hidden cursor-pointer " aria-label="Menu" onClick={() => setOpen(!open)}>
       <img src={open ? assets.close_icon : assets.menu_icon} alt="menu"/> 
      </button>
    </div>
  );
};

export default Navbar;
