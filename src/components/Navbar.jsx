import React, { useState } from "react";
import pic from "../../public/photo.avif"; // Replace with actual photo if needed
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Skills" }, // Changed from "Experience"
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <div className="flex space-x-3 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Chaitali Patil" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer">
                Chaitali <span className="text-green-500 text-2xl">Patil</span>
              </h1>
              <p className="text-sm">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                key={id}
                className="list-none hover:scale-105 duration-200 cursor-pointer"
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </div>

          {/* Mobile Toggle Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl font-semibold">
              {navItems.map(({ id, text }) => (
                <li key={id} className="cursor-pointer hover:scale-105 duration-200">
                  <Link
                    onClick={() => setMenu(false)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
