import logo from './logo.svg';
import './App.css';
import Nav from './comp/Nav';
// import Login from './comp/Login';
import About from './comp/About';
import Courses from './comp/Courses';
import Home from './comp/Home';

import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Context from './Context';

import {Routes , Route , Link , NavLink}  from "react-router-dom";


function App() {
  return (
    <>
  <Nav/>
    <Context.Provider value={{}}>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route index element = {<Home />}></Route>
    {/* <Route path = "login" element = {<Login />}></Route> */}
    <Route path = "courses" element = {< Courses />}></Route>
    <Route path = "about" element = {<About />}></Route>
    </Routes>
    </Context.Provider>
    </>
  );
}

export default App;
