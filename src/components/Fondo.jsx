import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { createContext } from "react";
import s from "../styles/Fondo.module.css";
import Cloud from "./Cloud";
import Path from "./Path";

export const cloudContext = createContext();

const Fondo = () => {
  const [pos, setPos] = useState(0);
  const [clouds, setClouds] = useState([]);

  const [idToDelete, setIdToDelete] = useState(null);

  useEffect(() => {
    setClouds(prev => {
      const elem = <Cloud pos={pos-40} key={pos} id={pos}></Cloud>

      return[
        ...prev,
        elem
      ]
    })
  }, [pos])

  useEffect(() => {
    if(typeof idToDelete == "number"){
      // console.log("tengo que eliminar a", idToDelete)

      setClouds(prev => {
        const newArray = prev.filter(c => {
          // console.log(`${c.key} != ${idToDelete} ? => ${parseInt(c.key) !== idToDelete}`)
          if(parseInt(c.key) !== idToDelete){
            return c;
          }
        });

        // console.log("nuevo array:",newArray)
        // prev.shift();

        // console.log(prev);
        
        return newArray;
      });
    }
  }, [idToDelete]);

  // useEffect(() => {
  //   console.log(clouds);
  // }, [clouds]);

  return (
    <div className={s.container}>
      <div className={s.sol}></div>
      <cloudContext.Provider value={{pos, setPos, setIdToDelete}}>
        <div>
          <Path/>
          {clouds}
          {/* <Cloud pos={10}/>
          <Cloud pos={120}/>
          <Cloud pos={300}/>
          <Cloud pos={500}/> */}
        </div>
      </cloudContext.Provider>
    </div>
  )
}

export default Fondo