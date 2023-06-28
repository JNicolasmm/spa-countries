import { LandingPage } from '../../Components/Landing/LandingPage'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCountries, getActivities } from '../../Redux/actions'

export const Landing = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())
  }, [dispatch])

  return (
    <div>
      <LandingPage />
    </div>
  )
}