import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './pages/ProductList'
import Profil from './pages/Profil';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Chat from './components/User/Chat';
import Notfound from './pages/NotFound';
import Category from './pages/Category';
import Detail from './pages/Detail';
import PrivateRoute from './pages/PrivateRoute';


function App() {
  return (
    <Routes>
      {/* <Route exact path='/logout' element={<Login />} /> */}

      <Route exact path='/profile' element={<Profil />} />
      <Route exact path='/complain' element={<Chat />} />
      <Route exact path='*' element={<Notfound />} />
      <Route exact path='/' element={<Shop />} />
      <Route exact path='/detail' element={<Detail />} />


      {/* private route */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/productlist" element={<Product />} />
        <Route exact path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/" element={<Category />} /> */}
      </Route>
    </Routes>


  );
}


export default App;
