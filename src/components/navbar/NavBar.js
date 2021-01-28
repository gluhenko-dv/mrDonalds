import React from "react";
import logoImg from "../../image/logo.svg";
import sigInImg from "../../image/sign.svg";

export const NavBar = () => (
  <div className="header">
    <div className="header-logo">
      <img src={logoImg} alt="logo" />
      <h2 className="header-title">MRDonald’s</h2>
    </div>
    <div className="header-signin">
      <img src={sigInImg} alt="logo" />
      <button className="signin-btn">Войти</button>
    </div>
  </div>
);
