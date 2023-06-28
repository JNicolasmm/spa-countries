import style from './Cards.module.css'
import { useSelector } from "react-redux"
import { Card } from '../Card/Card'
import { useEffect, useState } from 'react'

export const CardsContainer = () => {
  const country = useSelector(state => state.country)

  const countries = useSelector(state => state.countries)

  const cantidadPaises = 10

  const [paises, setPaises] = useState([...countries].splice(0, cantidadPaises))

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => { 
    setCurrentPage(1)
    nextHandler()
    prevHandler() 
  }, [countries])

  const nextHandler = () => {

    const nextPage = currentPage + 1

    const firstIndex = nextPage * cantidadPaises

    if (firstIndex === countries.length) return

    setPaises([...countries].splice(firstIndex, cantidadPaises))

    setCurrentPage(nextPage)
  }

  const prevHandler = () => {
    const prevPage = currentPage - 1

    if (prevPage < 0) return

    const firstIndex = prevPage * cantidadPaises

    setPaises([...countries].splice(firstIndex, cantidadPaises))

    setCurrentPage(prevPage)
  }

  return (
    <div className={style.container}>
      <div>
        {country[0] ? <h1 className={style.h1}>Pais Seleccionado </h1> : null}
        {country[0]
          ? <Card
            key={country[0]?.id}
            id={country[0]?.id}
            image={country[0]?.image}
            name={country[0]?.name}
            continente={country[0]?.continente}
          />
          : null}
      </div>
      <div>
        <button className={style.button} onClick={prevHandler}>prev</button>
        <button className={style.button} onClick={nextHandler}>next</button>
      </div>

      <div className={style.cards}>
        {
          paises.map((country) => {
            return (
              <Card
                key={country?.id}
                id={country?.id}
                image={country?.image}
                name={country?.name}
                continente={country?.continente}
              />
            )
          })
        }
      </div>
      <div>
        <button className={style.button} onClick={prevHandler}>prev</button>
        <button className={style.button} onClick={nextHandler}>next</button>
      </div>
    </div>
  )
}