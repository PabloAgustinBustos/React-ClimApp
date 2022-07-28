import React from 'react';
import {Link, useLocation} from "react-router-dom";

import s from "../styles/NavBar.module.css";
import MainPageStyle from "../styles/MainPage.module.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const {pathname} = useLocation();

  switch(pathname){
    case "/":
      return (
        <nav className={s.nav}>
          <Link className={s.link} to="/about">about</Link>
          <SearchBar/>
        </nav>
      )
    
    case "/about":
      return (
        <nav className={s.nav}>
          <Link className={s.link} to="/">volver</Link>
          
          <h1 className={MainPageStyle.projectName}>ClimApp</h1>
        </nav>
      )
  }
}

export default NavBar
