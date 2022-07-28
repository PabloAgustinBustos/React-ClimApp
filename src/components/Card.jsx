import { useContext, useState } from "react";

import Button from "./Button";

import s from "../styles/Card.module.css";
import { CitiesContext } from "../provider/CitiesProvider";
import { useEffect } from "react";
import { useRef } from "react";

const Card = ({minTemp, maxTemp, cityName, img}) => {
    const [mostrar, setMostrar] = useState(true);
    const {setCities} = useContext(CitiesContext);

    const ref = useRef();

    useEffect(() => {
        return () => {    
            
        }
    }, []);

    if(mostrar){
        return (
            <div className={`${s.card} ${s.showCard}`} ref={ref}>
                <Button txt="x" type="close" onClose={e => {
                    e.stopPropagation();

                    ref.current.classList.replace(s.showCard, s.removeCard);
                    
                    setTimeout(() => {
                        console.log("ahora lo elimino")

                        setCities(prev => {
                            const newArray = prev.filter(city => city.key !== cityName);
    
                            return newArray;
                        })

                        setMostrar(false)
                    }, 500);
                }}/>
                
                <div className={s.containerFlex1}>
                    <img className={s.img} src={img} alt="" />
                    <h1 className={s.name}>{cityName}</h1>
                </div>
    
                <div className={s.tempContainer}>
                    <div className={s.containerFlex2}>
                        <span>max</span>
                        <span>{Math.round(maxTemp)}°</span>
                    </div>
    
                    <div className={s.containerFlex2}>
                        <span>min</span>
                        <span>{Math.round(minTemp)}°</span>
                    </div>
                </div>
            </div>
        )
    }else{
        return(null);
    }
}

export default Card