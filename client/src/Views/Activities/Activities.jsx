import { Form } from '../../Components/Form/Form'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../../Redux/actions'

export const Activities = () => {
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div>
      <Form />
    </div>
  )
}