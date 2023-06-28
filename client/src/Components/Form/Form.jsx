import style from './Form.module.css'
import axios from 'axios'
import { useState } from "react"
import { useSelector } from "react-redux"

export const Form = () => {
  const auxCountries = useSelector(state => state.auxCountries)

  const aux1 = []

  auxCountries.forEach(e => aux1.push(e))

  aux1.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })

  const [form, setForm] = useState(
    {
      name: '',
      dificultad: '',
      temporada: '',
      paisesAsociados: [],
      aux: []
    }
  )

  const [errors, setErrors] = useState(
    {
      name: ''
    }
  )

  const validate = (form) => {
    if (form.name.length < 1) {
      setErrors(
        {
          ...errors,
          name: 'Este campo no puede estar vacio'
        }
      )
    } else if (form.name.length < 3 || form.name.length > 25) {
      setErrors(
        {
          ...errors,
          name: 'Este campo debe tener entre 3 y 25 caracteres'
        }
      )
    } else {
      setErrors(
        {
          ...errors,
          name: ''
        }
      )
    }
  }

  const handlerName = (event) => {
    const property = event.target.name
    const value = event.target.value

    validate({
      ...form,
      [property]: value
    })

    setForm({
      ...form,
      [property]: value
    })
  }

  const changeHandler = (event) => {
    const property = event.target.name
    const value = event.target.value

    if (property === 'paisesAsociados') {
      const aux = auxCountries.find(e => e.id === value)

      setForm(
        {
          ...form,
          paisesAsociados: [...form.paisesAsociados, event.target.value],
          aux: [...form.aux, aux.name]
        }
      )
    } else {
      setForm(
        {
          ...form,
          [property]: value
        }
      )
    }
  }

  const submitHandler = async (event) => {
    try {
      event.preventDefault()
      await axios.post('http://localhost:3001/activities', form)
      alert('Actividad Creada con Exito')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.container}>
      <form onSubmit={submitHandler}>
        <div>
          <label>Nombre: </label>
          <input className={style.select_input} type="text" value={form.name} onChange={handlerName} name="name" />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Dificultad: </label>
          <select className={style.select_input} name="dificultad" onChange={changeHandler}>
            <option value="" hidden>Elegir Dificultad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Temporada: </label>
          <select className={style.select_input} name="temporada" onChange={changeHandler}>
            <option value="" hidden>Elegir Temporada</option>
            <option value="Invierno">Invierno</option>
            <option value="Otoño">Otoño</option>
            <option value="Primavera">Primavera</option>
            <option value="Verano">Verano</option>
          </select>
        </div>
        <div>
          <label>Paises: </label>
          <select className={style.select_input} name="paisesAsociados" onChange={changeHandler}>
            <option value="" hidden>Elegir Pais</option>
            {aux1.map(e => (
              <option value={e.id} key={e.id}>{e.name}</option>
            ))}
          </select>
          <div>
            {form.aux.map(e => (
              <span>{e} </span>
            ))}
          </div>
        </div>
        <button className={style.addButton} type="submit" disabled={errors.name === '' && form.dificultad !== '' && form.temporada !== '' && form.paisesAsociados.length > 0 ? false : true}>AÑADIR</button>
      </form>
    </div>
  )
}