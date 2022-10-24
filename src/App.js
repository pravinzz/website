// import React from 'react'
// // import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar';
// import Signup from './pages/signup/Signup';
// import Home from './pages/home/Home';
// import About from './pages/about/About';
// import Contact from './pages/contact/Contact';
// import Skills from './pages/skills/Skills';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';



// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>

//         <Route path='/' element={<Login />} />
//         {/* <Route path='/layout' element={<Layout />} /> */}
//         <Route path='menu' element={<Menu />} />
//         <Route path='home' element={<Home />} />
//         <Route path='blog' element={<Blog />} />
//         <Route path='signup' element={<Signup />} />
//         <Route path='forgetpassword' element={<Forgetpassword />} />
//         <Route path='logout' element={<Logout/>}/>

//       </Routes>

//     </BrowserRouter>
//     // <Router>

//     //   <Navbar />

//     //   <Switch>
//     //     <Route path='/' component={Home} exact>
//     //       <Home />
//     //     </Route>
//     //     <Route path='/about' component={About} exact>
//     //       <About />
//     //     </Route>
//     //     <Route path='/skills' component={Skills} exact>
//     //       <Skills />
//     //     </Route>
//     //     <Route path='/contact' component={Contact} exact>
//     //       <Contact />
//     //     </Route>
//     //     <Route path='/signup' component={Signup} exact>
//     //       <Signup />
//     //     </Route>


//     //   </Switch>
//     // </Router>
//   )
// }

// export default App




import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/login/Login'
import About from './pages/about/About';
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact';
import Signup from './pages/signup/Signup'
// import { Navbar } from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Profileedit from './pages/profile-menus/profile-edit/Profileedit';
import Profile from './pages/profile/profile';

function App() {

  return (

    <BrowserRouter>
      {/* <Layout /> */}

      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profileedit' element={<Profileedit />} />


      </Routes>

    </BrowserRouter>



  );
}

export default App;

