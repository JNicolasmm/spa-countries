import style from './Detail.module.css'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { countryDetail } from '../../Redux/actions'
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const dispatch = useDispatch()

  const { id } = useParams()

  const countryDtl = useSelector(state => state.countryDetail)

  useEffect(() => {
    dispatch(countryDetail(id))
  }, [dispatch, id])

  return (
    <div className={style.container}>
      <img src={countryDtl?.image} alt="" />
      <div className={style.data}>
        <h1>Nombre: {countryDtl?.name}</h1>
        <h1>ID: {countryDtl?.id}</h1>
        <h1>Contienente: {countryDtl?.continente}</h1>
        {countryDtl?.capital ? <h1>Capitales: {countryDtl.capital.join(', ')}</h1> : <h1>Capital: No hay capital registrada</h1>}
        {
          countryDtl?.subregión ? <h1>Subregion: {countryDtl?.subregión}</h1> : <h1>Subregion: No hay subregion registrada</h1>
        }
        <h1>Area: {countryDtl?.area} km²</h1>
        <h1>Poblacion: {countryDtl?.poblacion} Habitantes</h1>
      </div>
    </div>
  )

}


