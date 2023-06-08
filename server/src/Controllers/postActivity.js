const { Activity } = require('../db')

const postActivity = async (req, res) => {
  try {
    const { name, dificultad, temporada } = req.body
    if (!name || !dificultad || !temporada) return res.status(400).send('Faltan datos')
    const activity = await Activity.create({ name, dificultad, temporada })
    return res.json(activity)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = postActivity