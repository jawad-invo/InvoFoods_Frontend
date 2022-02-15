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
  const logout = () => {
    localStorage.clear();
  };
  return (
    <>
      <Nav>
        <div className="logoContainer">InvoFoods</div>
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
          <NavBtnLink onClick={logout} to="/">
            Logout
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
