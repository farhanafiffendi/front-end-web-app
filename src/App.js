import React from 'react';
import './css/App.css'
// import { BrowserRouter, Switch , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />

    </div>

  );
}


export default App;
