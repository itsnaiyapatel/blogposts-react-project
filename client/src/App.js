import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import AddPost from './pages/AddPost'
import Profile from './pages/Profile'
import './assets/css/App.css'
import SinglePost from "./pages/SinglePost";

function App() {

  return (
    <div className="app">
      <Navbar />      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addPost' element={<AddPost />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/singlePost' element={<SinglePost />} />
        </Routes>
    </div>
  );
}

export default App;
