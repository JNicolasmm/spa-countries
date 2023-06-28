import { SearchBar } from '../../Components/SearchBar/SearchBar'
import { CardsContainer } from '../../Components/CardsContainer/CardsContainer'
import { FilterOrder } from '../../Components/FilterOrder/FilterOrder'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCountries, getActivities } from '../../Redux/actions'

export const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [dispatch])

  return (
    <div>
      <SearchBar />
      <FilterOrder />
      <CardsContainer />
    </div>
  )
}