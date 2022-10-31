import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/login/Login'
import About from './pages/about/About';
import Skills from './pages/skills/Skills'
import Signup from './pages/signup/Signup'
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Profileedit from './pages/profile-menus/profile-edit/Profileedit';
import Profile from './pages/profile/profile';
import Welcome from './pages/welcome-page/welcome';


function App() {

  return (

    <BrowserRouter>
      {/* <Layout /> */}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profileedit' element={<Profileedit />} />
      </Routes>

    </BrowserRouter>



  );
}

export default App;

