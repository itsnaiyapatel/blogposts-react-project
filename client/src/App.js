import React, { useContext, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import AddPost from './pages/AddPost'
import Profile from './pages/Profile'
import './assets/css/App.css'
import SinglePost from "./pages/SinglePost";
import Footer from "./components/Footer";
import EditPost from "./pages/EditPost";
import { AuthContext } from "./helper/AuthContext";
import axios from "./helper/axiosConfig";

function App() {

  const {auth, setAuth} = useContext(AuthContext)

  useEffect(() => {
    axios
      .get("/auth/authContext", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((res) => {
        if (res.data.error) {
          setAuth({ ...auth, isLoggedIn: false });         
        }
        else{
           setAuth({
            id: res.data.id,
            userName: res.data.userName,
            profileImage: `http://localhost:3001/${res.data.profileImage}`,
            isLoggedIn: true
          });
        }
      });     
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="all-pages">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addPost' element={<AddPost />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/singlePost/:id' element={<SinglePost />} />
        <Route path='/editPost' element={<EditPost />} />
      </Routes>
      </div>      
      <Footer />      
  
    </div>
  );
}

export default App;
