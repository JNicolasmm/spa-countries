import style from './Card.module.css'
import { NavLink } from "react-router-dom"

export const Card = ({ name, image, continente, id }) => {
  return (
    <div className={style.container}>
      <img src={image} alt="" />
      <div className={style.data}>
        <h3>
          Nombre: <NavLink to={`/detail/${id}`}>{name}</NavLink>
        </h3>

        <h3>Continente: {continente}</h3>
      </div>
    </div>
  )
}