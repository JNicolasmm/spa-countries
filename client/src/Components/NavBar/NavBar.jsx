import style from './NavBar.module.css'
import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className={style.container}>
      <NavLink to={'/home'}>
        <button className={style.button}>HOME</button>
      </NavLink>
      <NavLink to={'/activities'}>
        <button className={style.button}>ACTIVITIES</button>
      </NavLink>
    </div>
  )
}