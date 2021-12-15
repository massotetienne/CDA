import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import Meteo from './pages/Meteo';
import Notfound from './pages/Notfound';

const App = () => {
  return (
   <HashRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/a-propos" exact component={<About/>}/>
      <Route path="/news"exact component={<News/>}/>
      <Route path="/meteo"exact component={<Meteo/>}/>
     <Route component={<Notfound/>}/>
    </Routes>
   </HashRouter>
  );
};

export default App;
