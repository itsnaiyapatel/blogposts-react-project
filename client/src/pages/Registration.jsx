import React from "react";
import LoginRegisterCard from "../components/LoginRegisterCard";
import axios from "../helper/axiosConfig";
import {useNavigate} from "react-router-dom";

function Registration() {
  let navigate = useNavigate();

  let registerBtn = (data) => {
    axios.post("/auth/registration", data).then((res) => {
      alert(JSON.stringify(res.data.message));
      navigate("/login");
    });
  };

  return <LoginRegisterCard isLogin={false} handleSubmit={registerBtn} />;
}

export default Registration;
