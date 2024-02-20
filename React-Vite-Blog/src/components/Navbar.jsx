import { Link, NavLink, Outlet } from "react-router-dom";

import { FaBars, FaFacebook } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen,setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blog", link: "Blog" },
    { path: "/contact", link: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="bg-black">
        <nav className="px-4 py-4 flex max-w-7xl mx-auto flex-row justify-between items-center text-center text-white">
          <h2 className="text-xl font-bold">
            Design<span className="text-orange-600">DK</span>
          </h2>

          {/* navItems for lg devices */}
          <ul className="hidden md:flex gap-12 list-none flex-row justify-evenly text-lg">
            {navItems.map(({ path, link }) => {
              return (
                <li key={path}>
                  <NavLink 
                  to={path}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* menu icons */}
          <div className="hidden lg:flex flex-row items-center gap-4">
            <Link to="/hello" className="hover:text-orange-500"><FaFacebook /></Link>
            <Link to="/hello" className="hover:text-orange-500"><FaPinterest /></Link>
            <button className="over:text-orange-500 px-6 py-2 font-medium rounded outline-none bg-orange-600 hover:bg-white hover:text-orange-500 transition-all duration-800 ease-in">
              Log in
            </button>
          </div>

          {/* menu btn for mobile screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {
                isMenuOpen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5"/>
              }
              </button>
          </div>

          {/* menuItems for mobile only */}
          
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-4 mt-14 bg-white text-black ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden" }`}>
            {navItems.map(({ path, link }) => {
              return (
                <li key={path}>
                  <NavLink to={path}>{link}</NavLink>
                </li>
              );
            })}
            </ul>
          
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
