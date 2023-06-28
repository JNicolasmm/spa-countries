import style from './LandingPage.module.css'
import { NavLink } from "react-router-dom"


export const LandingPage = () => {
  return (
    <div>
      <NavLink to={'/home'}>
        <button className={style.button}>HOME</button>
      </NavLink>
    </div>
  )
}