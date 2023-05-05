import { BsMoon } from "react-icons/bs";
import { NavContainer } from "./styles";
import React, { useContext, useState } from 'react';
import ReactSwitch from "react-switch";
import FlagContext from "../Context/FlagContext";
const Navbar = () => {
  const {theme} = useContext (FlagContext)
  const {toggletheme} = useContext (FlagContext)
 

  return (
    <NavContainer  >
        <div className="nav" id={theme} >
        <h3>Where in the world?</h3>
        </div>
        <div className="dark-mode">
         <ReactSwitch className="ReactSwitch" onChange={toggletheme}  checked={theme === "dark"} />
        </div>
    </NavContainer>
  );
};
export default Navbar;
