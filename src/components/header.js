import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";

import { AuthContext } from "../utilities/authContext";
const Header = () => {
  const [nav, setNav] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center bg-white shadow-lg sticky top-0 z-50 px-4 ">
      <Link to="/">
        <img
          alt="logo"
          className="w-28"
          src="https://brentgoff.files.wordpress.com/2013/12/lexus-logo-3.jpg"
        ></img>
      </Link>
      <ul className="hidden md:flex">
        <Link className="text-xl pt-2 px-2" to="/create">
          Add a new car
        </Link>
        
        <Link className="pt-2 px-2 text-xl" to="/Infinity">INFINITY</Link>
        
        <nav className="text-gray-700 text-lg font-bold font-mono mt-2 px-10">
          {currentUser != null ? (
            <button className="bg-blue-500 rounded text-white px-4 py-2 text-semibold">
              Logout
            </button>
          ) : (
            <Link className="mt-4" to="/Login">
              Login
            </Link>
          )}
        </nav>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "md:hidden text-white fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Link to="/">
          <img
            className="w-24"
            src="https://wallpaperaccess.com/full/1974456.jpg"
          ></img>
        </Link>
        <div className="p-4">
          <Link className="text-xl pt-2" to="/create">
            Add a new car
          </Link>
          <nav className="text-lg font-bold font-mono mt-2">
            {currentUser != null ? (
              <button className="bg-blue-500 rounded text-white px-4 py-2 text-semibold">
                Logout
              </button>
            ) : (
              <Link className="mt-4 text-xl" to="/Login">
                Login
              </Link>
            )}
            <br />
            <Link className="pt-2 text-xl" to="/Suv">
              RZ 450e
            </Link>
            <br />
            <Link className="text-xl pt-2" to="/create">
              Add a new car
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Header;
