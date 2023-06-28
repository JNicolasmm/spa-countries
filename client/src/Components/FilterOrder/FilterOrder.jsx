import style from './FilterOrder.module.css'
import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards, actvFiler } from '../../Redux/actions'

export const FilterOrder = () => {
  const activities = useSelector(state => state.activities)

  const dispatch = useDispatch()

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  const handlerActvFltr = (event) => {
    dispatch(actvFiler(event.target.value))
  }

  return (
    <div className={style.container}>
      <div className=''>
        <label>Ordenar por: </label>
        <select className={style.select} onChange={handlerOrder}>
          <option value="" hidden>Elegir Orden</option>
          <option value="A">Poblacion Ascendente</option>
          <option value="D">Poblacion Descendente</option>
          <option value="A - Z">Alfabetico A - Z</option>
          <option value="Z - A">Alfabetico Z - A</option>
        </select>
      </div>

      <div>
        <label>Filtrar por Continente: </label>
        <select className={style.select} onChange={handlerFilter}>
          <option value="" hidden>Elegir Continente</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Atartic">Atartic</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Todos">Todos</option>
        </select>
      </div>

      <div>
        <label>Filtrar por Actividad: </label>
        <select className={style.select} onChange={handlerActvFltr}>
          <option value="" hidden>Elegir Acitvidad</option>
          {activities.map(e => (
            <option value={e.name} key={e.name}>{e.name}</option>
          ))}
          <option value="Ninguno">Ninguno</option>
        </select>
      </div>
    </div>
  )
}