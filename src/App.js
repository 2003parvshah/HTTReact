import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Courses from './components/Courses';
import Home from './components/Home';
import Blogs from './components/Blogs';
=======
import Nav from './comp/Nav';
import Login from './comp/Login';
import About from './comp/About';
import Courses from './comp/Courses';
import Home from './comp/Home';
>>>>>>> a9dcc94e809565b1bb7f289fd41be25485c39177



import {Routes , Route , Link , NavLink}  from "react-router-dom";


function App() {
  return (
<<<<<<< HEAD
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
=======
    <>
  <Nav/>
    <Routes>
    <Route index element = {<Home />}></Route>
    <Route path = "login" element = {<Login />}></Route>
    <Route path = "courses" element = {< Courses />}></Route>
    <Route path = "about" element = {<About />}></Route>


    </Routes>
    </>
>>>>>>> a9dcc94e809565b1bb7f289fd41be25485c39177
  );
}

export default App;
