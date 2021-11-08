import React from 'react';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actus from './pages/Actus';
import Weather from './pages/Weather';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' exact element={<Home />}/>
    <Route path='/actus' exact element={<Actus />}/>
    <Route path="/weather" exact element={<Weather />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
