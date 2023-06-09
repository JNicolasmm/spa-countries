const { Country, Activity } = require('../db')

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params
    const country = await Country.findOne({ where: { id: id }, include: Activity })
    if (country) return res.json(country)
    else return res.status(400).send(`No se encuentra ningun pais con el id: ${id}`)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = getCountryById