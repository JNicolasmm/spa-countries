const { Activity, Country } = require('../db')

const posActivityHandler = async (name, dificultad, temporada, paisesAsociados) => {
  try {
    if (dificultad > 5 || dificultad < 1) return { error: 'Dificultad solo puede tener estos valores: 1, 2, 3, 4, 5' }
    if (temporada !== 'Verano' && temporada !== 'Otoño' && temporada !== 'Invierno' && temporada !== 'Primavera') return { error: 'Temporada solo puede tener uno de estos valores: Verano, Otoño, Invierno, Primavera' }
    if (!paisesAsociados.length) return { error: 'PaisesAsociados debe ser un array con los id de los paises, no puede ser un array vacio o string vacia' }
    const aux = paisesAsociados.some(el => typeof (el) !== 'string' || el.length < 3 || el.length > 3)
    if (aux) {
      return { error: 'PaisesAsociados debe ser un array con los id de los paises, no puede ser un array vacio o string vacia' }
    } else {
      const activity = await Activity.create({ name, dificultad, temporada })
      paisesAsociados.forEach(async (el) => {
        const country = await Country.findOne({ where: { id: el } })
        await country.addActivity(activity)
      })
      return activity
    }
  } catch (error) {
    return error.message
  }
}

module.exports = posActivityHandler