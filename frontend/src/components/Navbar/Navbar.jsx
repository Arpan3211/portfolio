import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // handle click on menu icon to open menu
  const handleMenuClick = () => {
    setToggle(true);
  };

  // handle click on close icon to close menu
  const handleCloseClick = () => {
    setToggle(false);
  };

  // handle click on menu item to close menu
  const handleItemClick = () => {
    setToggle(false);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* use map to generate navbar links */}
        {["home", "contact", "work", "skills"].map((item) => (
          <li className="app__flex" key={`link-${item}`}>
            <a href={`#${item}`} onClick={handleItemClick}>{item}</a>
            <div className="div1" />
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {/* display menu icon if toggle is false */}
        {!toggle && <HiMenuAlt4 onClick={handleMenuClick} />}
        {/* display close icon and menu items if toggle is true */}
        {toggle && (
          <div>
            <HiX onClick={handleCloseClick} />
            <ul>
              {/* use map to generate menu items */}
              {["home", "contact", "work", "skills"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={handleItemClick}>
                    {item}
                  </a>
                </li>
              ))}
              <img src={images.anime} alt="anime" />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
