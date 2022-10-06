import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";

// import link
import { Link } from "react-router-dom";
// import logo
import { FaHome } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    document.title = "Estatery";  
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" hidden sm:flex items-center gap-6 text-lg font-bold">
        <Link to="/" className="logo flex text-2xl ">
          <FaHome/> 
          <h1 className="">&nbsp;Estatery</h1>
        </Link>
        <Link className=" bg-white-700 hover:bg-violet-800 hover:text-white text-violet px-4 py-3 rounded-lg transition" to="/rent">
           Rent
          </Link>
          <Link className="bg-white-700 hover:bg-violet-800 hover:text-white text-violet px-4 py-3 rounded-lg transition" to="/buy">
            Buy
          </Link>
          <Link className="bg-white-700 hover:bg-violet-800 hover:text-white text-violet px-4 py-3 rounded-lg transition" to="/sell">
            Sell
          </Link>
          <select name="manage">
            <option>Manage Property</option>
            </select>
          <select name="resource">
            <option>Resource</option>
          </select>
        </div>
        
        <div className="hidden sm:flex items-center gap-6">
          <Link
            className="bg-white-700 text-violet px-4 py-3 rounded-lg transition"
            to="/"
          >
            Login
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
        <div
          className="flex flex-col sm:hidden bg-violet-400 hover:bg-violet-500 text-white px-4 py-3 rounded-lg transition cursor-pointer"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? (
            <div className="flex justify-end">
              <ImCancelCircle size={18} />
            </div>
          ) : (
            "Menu"
          )}
          {showMenu && (
            <ul className="">
              <Link to="/">
                <li className="hover:text-violet-900 transition">Rent</li>
              </Link>
              <Link to="/">
                <li className="hover:text-violet-900 transition">Buy</li>
              </Link>
              <Link to="/">
                <li className="hover:text-violet-900 transition">Sell</li>
              </Link>
              <Link to="/">
                <li className="hover:text-violet-900 transition">Sign up</li>
              </Link>
              <Link to="/">
                <li className="hover:text-violet-900 transition">Login</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
