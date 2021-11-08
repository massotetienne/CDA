import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import Meteo from './pages/Meteo'
import Notfound from './pages/Notfound';

const App = () => {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/a-propos" exact component={About}/>
      <Route path="/news"exact component={News}/>
      <Route path="/weather"exact component={Meteo}/>
     <Route component={Notfound}/>
    </Switch>
   </BrowserRouter>
  );
};

export default App;
