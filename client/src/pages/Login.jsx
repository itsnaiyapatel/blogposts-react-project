import React, { useContext } from 'react'
import LoginRegisterCard from '../components/LoginRegisterCard'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../helper/AuthContext';


function Login() {

  let navigate = useNavigate();
  const {auth, setAuth} = useContext(AuthContext);

  let loginBtn = (data) => {
    axios.post('http://localhost:3001/auth/login', data).then((res) => {
      alert(JSON.stringify(res.data.message));
      setAuth(auth);
      navigate('/');
    });
  };

  return (
    <LoginRegisterCard isLogin={true} handleSubmit={loginBtn}/>
  )
}

export default Login
