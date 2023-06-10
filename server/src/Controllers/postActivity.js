const posActivityHandler = require('../handlers/posActivityHandler')

const postActivity = async (req, res) => {
  try {
    const { name, dificultad, temporada, paisesAsociados } = req.body
    if (!name || !dificultad || !temporada || !paisesAsociados || !Array.isArray(paisesAsociados)) return res.status(400).send('Faltan datos, paises asociados debe ser un array con el id de los paises')
    const activity = await posActivityHandler(name, dificultad, temporada, paisesAsociados)
    activity.error
      ? res.status(400).send(activity.error)
      : res.json(activity)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = postActivity