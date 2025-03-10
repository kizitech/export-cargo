import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hamburger from "../assets/hamburgerMenu.svg";
import Close from "../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCloseMobileNav = () => {
    setToggle(false);
  };

  // Scroll to section smoothly
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setToggle(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="w-full h-16 lg:h-[96px] bg-white shadow-sm p-4 top-0 sticky z-50">
      <div className="max-w-7xl m-auto w-full h-full flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800 uppercase tracking-wide">
          Export Cargo
        </h1>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 transition-all">
            <Link to="/">
              <li className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300">
                Home
              </li>
            </Link>
            <li
              className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300"
              onClick={() => handleScroll("about")}
            >
              About Us
            </li>
            <li
              className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300"
              onClick={() => handleScroll("services")}
            >
              Services
            </li>
            <Link to="/contact">
              <li className="text-dark hover:text-dark3 cursor-pointer transition-colors duration-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Cargo Tracker Button */}
        <div className="md:flex hidden">
          <Link to="/tracker" className="px-8 py-3 bg-dark hover:bg-opacity-85 text-white rounded">
            Cargo Tracker
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div whileTap={{ scale: 0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
          <img src={toggle ? Close : Hamburger} alt="menu-icon" />
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="w-full relative">
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={toggle ? "absolute z-10 bg-white p-4 w-full shadow-2xl md:hidden" : "hidden"}
        >
          <Link to="/" onClick={handleCloseMobileNav}>
            <li className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded">
              Home
            </li>
          </Link>
          <li
            className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded"
            onClick={() => handleScroll("about")}
          >
            About Us
          </li>
          <li
            className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded"
            onClick={() => handleScroll("services")}
          >
            Services
          </li>
          <Link to="/contact" onClick={handleCloseMobileNav}>
            <li className="text-dark p-4 hover:bg-gray-50 cursor-pointer transition ease-out duration-300 rounded">
              Contact
            </li>
          </Link>
          <div className="flex flex-col my-10 gap-4">
            <Link to="/tracker" onClick={handleCloseMobileNav} className="px-8 py-5 text-center bg-dark text-white rounded">
              Cargo Tracker
            </Link>
          </div>
        </motion.ul>
      </div>
    </header>
  );
};

export default Navbar;
