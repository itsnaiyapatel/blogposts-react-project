import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import UserAvatarContainer from "./UserAvatarContainer";
import "../assets/css/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../helper/AuthContext";

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);

  const logoutBtn = () => {
    localStorage.removeItem("accessToken");
    setAuth({});
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="menu">
        <Link to="/">Home</Link>
        {auth?.isLoggedIn ? (
          <>
            <Link to="/addPost">Add Post</Link>
            <button onClick={logoutBtn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registration</Link>
          </>
        )}
      </div>
      <UserAvatarContainer
        userName={auth.userName}
        profileImage={auth.profileImage}
      />
    </div>
  );
}

export default Navbar;
