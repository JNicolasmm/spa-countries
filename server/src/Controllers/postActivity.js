const { Activity, Country } = require('../db')

const postActivity = async (req, res) => {
  try {
    const { name, dificultad, temporada, paisesAsociados } = req.body
    if (!name || !dificultad || !temporada || !paisesAsociados || !Array.isArray(paisesAsociados)) return res.status(400).send('Faltan datos, paises asociados debe ser un array con el id de los paises')
    const activity = await Activity.create({ name, dificultad, temporada })
    let aux = false
    paisesAsociados.forEach(el => {
      if (typeof (el) !== 'string' || el.length < 3 || el.length > 3) aux = false
      else aux = true
    })
    if (aux) {
      paisesAsociados.forEach(async (el) => {
        const country = await Country.findOne({ where: { id: el } })
        await country.addActivity(activity)
      })
    } else {
      await activity.destroy()
      return res.status(400).send('paisesAsociados debe ser un array con los id de los paises, no puede ser un array vacio o string vacia')
    }
    return res.json(activity)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = postActivity