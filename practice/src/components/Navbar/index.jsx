import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/logo.svg")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/menus" activeStyle>
            Menus
          </NavLink>
          <NavLink to="/meals" activeStyle>
            Meals
          </NavLink>
          <NavLink to="/payments" activeStyle>
            Payment
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/Logout">Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
