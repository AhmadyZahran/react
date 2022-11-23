import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Player from './component/Player';
import Team from './component/Team';
import Match from './component/Match';
import Signup from './component/Signup';
import Login from './component/Login';

import './App.css';


function App() {

  const [searchNumber, setSearchNumber] = useState('');

  function halndleSubmit(search) {
    setSearchNumber(search);
  }

  // console.log(searchNumber + 'state');


  return (
    <BrowserRouter>
      <Header halndleSubmit={halndleSubmit} />
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Player' element={<Player playerId={searchNumber} />} />
          <Route path='/Team' element={<Team TeamId={searchNumber} />} />
          <Route path='/Match' element={<Match matchId={searchNumber} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />


        </Routes>
      </div>
      < Footer />
    </BrowserRouter>
  );
}

export default App;
