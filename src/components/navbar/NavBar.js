import React from "react";
import logoImg from "../../image/logo.svg";
import sigInImg from "../../image/sign.svg";

export const NavBar = ({ authentication, login }) => (
  <div className="header">
    <div className="header-logo">
      <img src={logoImg} alt="logo" />
      <h2 className="header-title">MRDonald’s</h2>
    </div>
    {authentication ? (
      <div className="header-signin" onClick={login}>
        <img src={sigInImg} alt="logo" />
        <button className="signin-btn">Выйти</button>
      </div>
    ) : (
      <div className="header-signin" onClick={login}>
        <img src={sigInImg} alt="logo" />
        <button className="signin-btn">Войти</button>
      </div>

    )}
  </div>
);
