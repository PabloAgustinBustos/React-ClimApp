import React from 'react'
import s from "../styles/MainPage.module.css";
import rrd from "../stack/react-router-dom.png";
import r_icon from "../stack/React-icon.svg.png"
import {Link} from "react-router-dom";

const AboutPage = () => {
    const containers = [
        {
            title: "¿De qué trata el proyecto?",
            paragraph: "Es un proyecto básico en el que el usuario puede consultar el clima de multiples paises, provincias o ciudades y se agrega en una card en la ruta principal."
        },
        
        {
            title: "¿Cómo fué el proceso?",
            paragraph: "Fue un poco confuso al principio ya que fué mi primera experiencia práctica con React, dentro del bootcamp SoyHenry, pero la verdad fue muy interesante y volver a re-hacerlo desde cero me ayudó mucho a expandir el proyecto, ya que al principio solo era un sitio web sin animaciones, con estilos muy simples y además sin animaciones."
        },

        {
            title: "¿Qué aprendí?",
            paragraph: "Básicamente aprendí mucho a cómo crear un proyecto en react y practicar lo básico (input controlado, rutas, estados, useEffect y otros hooks), dandome cuenta de errores y malas practicas que estaba siguiendo y corrigiendolas. Además aprendí a manejarme con el paquete react-router-dom y a hacer uso de animaciones y transiciones con CSS vanilla. También le di un estilo más estético al sitio, dibujando un sol y mostrando las cards como si fueran otras nubes. Básicamente la idea del diseño era tener coherencia con la temática del proyecto."
        }
    ]

    const stack = [
        <a href="https://es.reactjs.org/" key={r_icon}>
            <div className={`${s.iconContainer} ${s.black}`}>
                <img src={r_icon}/>
            </div>
        </a>,

        <a href="https://reactrouter.com/" key={rrd}>
            <div className={`${s.iconContainer} ${s.white}`}>
                <img src={rrd}/>
            </div>
        </a>
    ];

    return (
        <div className={s.mainContainer}>
            <div className={s.text}>
                {containers.map(container => (<div key={container.title} className={s.container}>
                    <h2 className={s.title}>{container.title.toUpperCase()}</h2>
                    
                    <p className={s.paragraph}>{container.paragraph}</p>
                </div>))}
            </div>
            
            <div className={s.stackContainer}>
                <h2 className={s.title}>tecnologías usadas</h2>

                <div className={s.stackIcons}>{stack}</div>
            </div>
        </div>
    )
}

export default AboutPage