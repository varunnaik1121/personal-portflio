import React, { useState } from "react";
import { images } from "../../constants/index";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo"></img>
        </div>
        <ul className="app__navbar-links">
          {["Home", "About", "Skills", "Contact"].map((link) => {
            return (
              <li className="app__navbar-link" key={`link ${link}`}>
                <a href={`#${link}`}>{link}</a>
                <div className="navbar__dot"></div>
              </li>
            );
          })}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <ul>
                {["Home", "About", "Skills", "Contact"].map((item) => (
                  <li key={`links ${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <HiX onClick={() => setToggle(false)} />
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
