import Card from "./Card"

import s from "../styles/Cards.module.css";

// import cities from "../data";
import { useContext, useEffect } from "react";
import { CitiesContext } from "../provider/CitiesProvider";
import { useState } from "react";

const Cards = () => {
  const {cities} = useContext(CitiesContext);

  const [visible, setVisible] = useState(false)

  return (
    <article className={s.container}>
      {cities}
    </article>
  )
}

export default Cards