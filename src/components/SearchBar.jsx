import { useContext, useState } from "react";
import { CitiesContext } from "../provider/CitiesProvider";
import s from "../styles/SearchBar.module.css";
import Button from "./Button";
import axios from "axios";
import Card from "./Card";

const SearchBar = () => {
  const [name, setName] = useState("");
  
  const {setCities} = useContext(CitiesContext);

  return (
    <form className={s.form} onSubmit={e => {
      e.preventDefault();

      setCities(prev => {
        return [
          ...prev,
          <img key="https://i.gifer.com/ZZ5H.gif" src="https://i.gifer.com/ZZ5H.gif" alt="" />
        ]
      })

      if(name.length > 0){
        (async() => {
          try{
            const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=56b65badc81a7d01cd215ac3b29a202b`);

            setCities(prev => {
              const newArray = prev.filter(city => city.type !== "img");
              return[
                ...newArray,
  
                <Card
                  key={res.data.name}
                  minTemp={res.data.main.temp_min}
                  maxTemp={res.data.main.temp_max}
                  cityName={res.data.name}
                  img={`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`}
                />
              ]
            })
          }catch(e){
            alert("La ciudad no se encuentra");
            setCities(prev => {
              const newArray = prev.filter(city => city.type !== "img");
              return newArray;
            })
          }
        })()
        setName("");
      }else{
        setCities(prev => {
          const newArray = prev.filter(city => city.type !== "img");
          return newArray;
        })
        alert("primero escribe el nombre antes de buscar");
      }
    }}>
      <input 
        className={s.input} 
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Button 
        txt="Buscar" 
        type="search"
      />
    </form>
  )
}

export default SearchBar