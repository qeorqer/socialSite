import React from 'react';
import './style.css';
import Header from './comonents/Header';
import Nav from './comonents/Nav';
import Profile from './comonents/profile';

function App() {
  return (
    <div className="inner">
     <Header/>
     <Nav />
    <Profile />
    </div>
  );
}

export default App;
