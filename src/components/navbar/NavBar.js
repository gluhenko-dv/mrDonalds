import React, {useContext} from 'react';
import logoImg from '../../Assets/image/logo.svg';
import sigInImg from '../../Assets/image/sign.svg';
import {Context} from '../functions/context';
export const NavBar = () => {
  const {auth} = useContext(Context);
  const {authentication, logIn, logOut} = auth;
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logoImg} alt="logo" />
        <h2 className="header-title">MRDonald’s</h2>
      </div>
      {authentication ? (
        <div className="header-signin">
          <img src={sigInImg} alt="logo" />
          <span>{authentication.displayName}</span>
          <button className="signin-btn" onClick={logOut}>
            Выйти
          </button>
        </div>
      ) : (
        <div className="header-signin" onClick={logIn}>
          <img src={sigInImg} alt="logo" />
          <button className="signin-btn">Войти</button>
        </div>
      )}
    </div>
  );
};
