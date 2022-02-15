import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";

import navlogo from "../images/Assets/navlogo.png";
import dashboard from "../images/Assets/dashboard.png";
import admin from "../images/Assets/admin.png";
import question from "../images/Assets/question.png";
import pin from "../images/Assets/pin.png";
import pricing from "../images/Assets/pricing.png";
import account from "../images/Assets/account.png";
import notify from "../images/Assets/notify.png";
import setting from "../images/Assets/setting.png";
import exit from "../images/Assets/exit.png";

const NavBar = () => {
  const logout = () => {
    localStorage.clear();
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="nb__container">
        <div className="nb__header">
          <h1>InvoFoods</h1>
        </div>

        <div className="nb__body">
          <NavLink
            to="/admin/menus"
            activeClassName="active__link"
            className="nb__body1"
          >
            <div>
              <img src={dashboard} alt="" className="body1__icon" />
            </div>
            <div className="body1__para">Menus</div>
          </NavLink>
          <NavLink
            activeClassName="active__link"
            to="/admin/subscribers"
            className="nb__body1"
          >
            <div>
              <img src={pin} alt="" className="body1__icon" />
            </div>
            <div className="body1__para">Subscribers</div>
          </NavLink>
          <NavLink
            activeClassName="active__link"
            to="/admin/meals"
            className="nb__body1"
          >
            <div>
              <img src={admin} alt="" className="body1__icon" />
            </div>
            <div className="body1__para">Meals</div>
          </NavLink>
          <NavLink
            activeClassName="active__link"
            to="/admin/payments"
            className="nb__body1"
          >
            <div>
              <img src={pricing} alt="" className="body1__icon" />
            </div>
            <div className="body1__para">Payments</div>
          </NavLink>
          <NavLink
            activeClassName="active__link"
            to="/"
            className="nb__body1"
            onClick={logout}
          >
            <div>
              <img src={account} alt="" className="body1__icon" />
            </div>
            <div className="body1__para">Logout</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
