import NavBar from './components/NavBar.jsx';
import s from './App.module.css';

import Cards from './components/Cards.jsx';
import Fondo from './components/Fondo.jsx';
//https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56b65badc81a7d01cd215ac3b29a202b
//http://openweathermap.org/img/wn/02d@2x.png

function App() {
  return (
    <div className={s.app}>
      <Fondo/>

      <NavBar/>
      
      <Cards/>
    </div>
  );
}

export default App;
