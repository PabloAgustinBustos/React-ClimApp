import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import s from "../styles/Cloud.module.css";
import { cloudContext } from './Fondo';

const Cloud = ({pos, id}) => {
    const ref = useRef();
    const {setIdToDelete} = useContext(cloudContext);

    useEffect(() => {
        ref.current.addEventListener("animationend", e => {
            // TODO: arreglar el coso de eliminar el elemento
            // e.target.remove();
            setIdToDelete(parseInt(e.target.id));
        });
    }, []);

    return (
        <div id={id} className={s.container} style={{top: `${pos}px`}} ref={ref}>
            <div className={`${s.cloud} ${s.cloud1}`}></div>
            <div className={`${s.cloud} ${s.cloud2}`}></div>
            <div className={`${s.cloud} ${s.cloud3}`}></div>
        </div>
    )
}

export default Cloud