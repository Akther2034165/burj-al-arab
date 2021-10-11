import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
      }}
      className="header"
    >
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link className="btn-book" to="/book">
              Book
            </Link>
          </li>
          <span className="userInfo">{user.displayName}</span>
          <img src={user.photoURL} style={{ borderRadius: "15px" }} alt="" />
          {user.email ? (
            <button onClick={logOut} className="logoutBtn">
              log out
            </button>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="title-container">
        <h1>Burj Al Arab</h1>
        <h2>A global icon of Arabian luxury</h2>
      </div>
    </div>
  );
};

export default Header;
