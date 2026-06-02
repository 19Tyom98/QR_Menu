import './App.css';
import Header from './Components/Header';
import Logo_page from './Components/Logo_page';
import{ Context } from './Components/Context'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coffee  from './Components/Coffee'
import Breakfast from './Components/Breakfast'
import Burgers from './Components/Burgers'
import Desserts from './Components/Desserts'
import Drinks from './Components/Drinks'

function App() {

  const [color, setColor] = useState('#F8F4E3;')

  const valus = {
    color, setColor,
  }

  return (
    <Context.Provider value={valus}>
    <div className="App">
      <Logo_page />
      <Header />
      <Routes>
        <Route path="/" element={<Coffee />} />
        <Route path="/Breakfast" element={<Breakfast />} />
        <Route path="/Burgers" element={<Burgers />} />
        <Route path="/Desserts" element={<Desserts />} />
        <Route path="/Drinks" element={<Drinks />} />
      </Routes>
    </div>
  </Context.Provider>
  );
}

export default App;
