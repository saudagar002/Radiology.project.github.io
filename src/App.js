


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import LoginSuccess from './components/LoginSuccess';
import Navbar from './components/Navbar';
import Pathology from './components/Pathology';
import Cart from './components/Cart';
import Radiology from './components/Radiology ';
import Apexchart1 from './components/Apexchart1'
import Pagination from './components/Pagination';
import Home from './components/Home';
import views from './components/views'
import ReactPaginate from 'react-paginate';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/navbar" element={<Navbar onLogout={handleLogout} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/pathology" element={<Pathology />} />
         <Route path="/Cart" element={<Cart />} /> 
        <Route path="/Radiology" element={<Radiology />} />
        <Route path="/Apexchart1" element={<Apexchart1 />} />
        <Route path="/Pagination" element={<Pagination />} />
       < Route path="/view/:svs.filepath" component={views} />
        <Route path="/Home" exact component={<Home/> } />
      </Routes>
    </Router>

  );
}
export default App;










































