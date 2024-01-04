import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home/home';
import About from './component/About/about';
import Conatctus from './component/Contactus/contact';
import Coins from './component/Coins/coins';
import Mints from './component/Mints/mints';
import Indcois from './component/Coins/indcoi';
import Frocois from './component/Coins/frocoi';
import Indcoisls from './component/Coins/Iists/indcoils';
import Frocoisls from './component/Coins/Iists/frocoils';
import NoPage from './component/Nopage/nopg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />}/>
        <Route path="/contact" element={<Conatctus />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/mints" element={<Mints />}/>
        <Route path="/indcoi" element={<Indcois />}/>
        <Route path="/frocoi" element={<Frocois />}/>
        <Route path="/indcoils" element={<Indcoisls />}/>
        <Route path="/frocoils" element={<Frocoisls />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
