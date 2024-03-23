import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Courses from './components/Courses';
import Home from './components/Home';
import Blogs from './components/Blogs';



import {Routes , Route , Link , NavLink}  from "react-router-dom";


function App() {
  return (
    <div className=''>
    <Nav/>
    <Routes>
    <Route path='/' element = {<Home />}></Route>
    <Route path = "/login" element = {<Login />}></Route>
    <Route path = "/courses" element = {< Courses />}></Route>
    <Route path = "/about" element = {<About />}></Route>
    <Route path='/register' element={<Register/>}/>
    <Route path='/blogs' element={<Blogs/>}/>


    </Routes>
    </div>
  );
}

export default App;
