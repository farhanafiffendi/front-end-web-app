import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductList from './pages/ProductList';
import Profil from './pages/Profil';
import Login from './pages/Login';
// import Register from './pages/Register';
import Shop from './pages/Shop';
import Chat from './components/User/Chat';
import Notfound from './pages/NotFound';
// import Category from './pages/Category';
import Detail from './pages/Detail';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Detail />} />
      <Route exact path='/profil' element={<Profil />} />
      <Route exact path='/logout' element={<Login />} />
      <Route exact path='/complain' element={<Chat />} />
      <Route exact path='*' element={<Notfound />} />
      <Route exact path='/product' element={<Shop />} />

      {/* private route */}
      {/* <Route path="/" element={<Login />}>
        <Route path="/listproduct" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users/:id" element={<DetailUser />} />
      </Route> */}
    </Routes>


  );
}


export default App;
