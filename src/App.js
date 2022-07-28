import Fondo from './components/Fondo.jsx';
import {Routes, Route} from "react-router-dom"
import MainPage from './pages/MainPage';
import s from './App.module.css';
import AboutPage from './pages/AboutPage.js';
import NavBar from './components/NavBar.jsx';
//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56b65badc81a7d01cd215ac3b29a202b
//http://openweathermap.org/img/wn/02d@2x.png

function App() {
  return (
    <div className={s.app}>
      <Fondo/>
      <NavBar/>
      <Routes>
        <Route index element={<MainPage/>}/>

        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
