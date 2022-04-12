import React from 'react';
import './css/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path="/profile" component={Profile} />
      </Router>
    </div>
  );
}


export default App;
