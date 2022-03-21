import Card from "./Card"

import s from "../styles/Cards.module.css";

// import cities from "../data";
import { useContext, useEffect } from "react";
import { CitiesContext } from "../provider/CitiesProvider";

const Cards = () => {
  const {cities} = useContext(CitiesContext);

  useEffect(() => {
    console.log(cities);
  }, [cities])

  return (
    <article className={s.container}>
      {cities}
    </article>
  )
}

export default Cards