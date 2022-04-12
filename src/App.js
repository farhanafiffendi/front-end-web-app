import React from 'react';
import Navbar from './components/Navbar'
import './css/App.css'
import FormLogin from './components/FormLogin';
import Carousal from './components/Carousal';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-lg-6 col-sm-12"><Carousal /></div>
        <div className="col-lg-6 col-sm-12"><FormLogin /></div>
      </div>
    </div>
  );
}


export default App;
