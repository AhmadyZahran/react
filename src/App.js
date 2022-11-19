import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Player from './component/Player';
import Team from './component/Team';
import Match from './component/Match';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      < Header />
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Player' element={<Player />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Match' element={<Match />} />

        </Routes>
      </div>
      < Footer />
    </BrowserRouter>
  );
}

export default App;
