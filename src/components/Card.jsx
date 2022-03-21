import { useContext, useState } from "react";

import Button from "./Button";

import s from "../styles/Card.module.css";
import { CitiesContext } from "../provider/CitiesProvider";

const Card = ({minTemp, maxTemp, cityName, img}) => {
    const [mostrar, setMostrar] = useState(true);
    const {setCities} = useContext(CitiesContext);

    if(mostrar){
        return (
            <div className={s.card}>
                <Button txt="x" type="close" onClose={e => {
                    e.stopPropagation();

                    setCities(prev => {
                        const newArray = prev.filter(city => city.key !== cityName);

                        return newArray;
                    })
                    setMostrar(false)
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