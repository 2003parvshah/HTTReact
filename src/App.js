import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Context from './Context';

function App() {
  return (
    <Context.Provider value={{}}>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </Context.Provider>
  );
}

export default App;
