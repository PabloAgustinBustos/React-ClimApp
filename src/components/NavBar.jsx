import {Link} from "react-router-dom";

import s from "../styles/NavBar.module.css";
import SearchBar from "./SearchBar";

const navBar = () => {
  return (
    <nav className={s.nav}>
      <Link className={s.link} to="/home">about</Link>
      <SearchBar/>
    </nav>
  )
}

export default navBar
