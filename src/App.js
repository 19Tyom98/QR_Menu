import './App.css';
import Header from './Components/Header';
import LogoPage from './Components/LogoPage';
import { Routes, Route } from "react-router-dom";
import MenuCategory from './Components/MenuCategory';
import { menuData } from './data';

function App() {
  return (
    <div className="App">
      <LogoPage />
      <Header />
      <Routes>
        <Route path="/" element={<MenuCategory items={menuData.coffee} />} />
        <Route path="/breakfast" element={<MenuCategory items={menuData.breakfast} />} />
        <Route path="/burgers" element={<MenuCategory items={menuData.burgers} />} />
        <Route path="/desserts" element={<MenuCategory items={menuData.desserts} />} />
        <Route path="/drinks" element={<MenuCategory items={menuData.drinks} />} />
      </Routes>
    </div>
  );
}

export default App;
