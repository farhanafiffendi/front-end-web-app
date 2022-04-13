import React from 'react';
import './css/App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './pages/ProductList';
import Profil from './pages/Profil';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/profil' element={<Profil />} />
      <Route path='/product' element={<ProductList />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}


export default App;
