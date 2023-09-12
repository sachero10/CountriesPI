import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Activities from './components/Activities/Activities';
import Form from './components/Form/Form';

function App() {
  const {pathname} = useLocation();

  return (
    <>
      <div>
        {pathname !== "/" && <Nav />} 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App
