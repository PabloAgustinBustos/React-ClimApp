import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import s from "../styles/Path.module.css";
import { cloudContext } from './Fondo';

const Path = () => {
    const path = useRef();
    const {setPos} = useContext(cloudContext);

    useEffect(() => {
        const {current} = path;
        window.requestAnimationFrame(() => {
            setInterval(() => {
                const elem = current.getBoundingClientRect();
                
                setPos(parseInt(elem.top));
            }, 2460)
        });
    }, [path]);

    return (
        <div className={s.path} ref={path}>Path</div>
    )
}

export default Path