import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './pages/ProductList';
import Profil from './pages/Profil';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Chat from './components/User/Chat';
import Notfound from './pages/NotFound';
// import Category from './pages/Category';
import Detail from './pages/Detail';
import PrivateRoute from './pages/PrivateRoute';


function App() {
  return (
    <Routes>
      <Route exact path='/logout' element={<Login />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/profil' element={<Profil />} />
      <Route exact path='/complain' element={<Chat />} />
      <Route exact path='*' element={<Notfound />} />
      <Route exact path='/product' element={<Shop />} />
      <Route exact path='/detail' element={<Detail />} />
      <Route path="/register" element={<Register />} />

      {/* private route */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/productlist" element={<ProductList />} />
        {/* <Route path="/" element={<Category />} /> */}
      </Route>
    </Routes>


  );
}


export default App;
