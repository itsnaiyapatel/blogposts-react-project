import React from "react";
import LoginRegisterCard from "../components/LoginRegisterCard";
import axios from "../helper/axiosConfig";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../helper/AuthContext";

function Login() {
  let navigate = useNavigate();

  const { setAuth } = useContext(AuthContext);
  
  let loginBtn = (data) => {
    axios.post("auth/login", data).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      setAuth({
        id: res.data.user.id,
        userName: res.data.user.userName,
        profileImage: `http://localhost:3001/${res.data.user.profileImage}`,
        isLoggedIn: true
      });
      navigate("/");
    });
  };

  return <LoginRegisterCard isLogin handleSubmit={loginBtn} />;
}

export default Login;
