import logo from './logo.svg';
import './App.css';
import Nav from './comp/Nav';
import Login from './comp/Login';
import About from './comp/About';
import Courses from './comp/Courses';
import Home from './comp/Home';



import {Routes , Route , Link , NavLink}  from "react-router-dom";


function App() {
  return (
    <>
  <Nav/>
    <Routes>
    <Route index element = {<Home />}></Route>
    <Route path = "login" element = {<Login />}></Route>
    <Route path = "courses" element = {< Courses />}></Route>
    <Route path = "about" element = {<About />}></Route>


    </Routes>
    </>
  );
}

export default App;
