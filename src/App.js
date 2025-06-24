import React from 'react';
import LoginPage from './LoginPage'; 
import LandingPage from "./LandingPage"

import { Routes, Route, Router } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/LoginPage' element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
