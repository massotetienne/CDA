
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actus from './pages/Actus';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' exact element={<Home />}/>
    <Route path='/actus' exact element={<Actus />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
