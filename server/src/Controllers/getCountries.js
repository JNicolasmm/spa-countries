const { Op } = require("sequelize")
const { Country, Activity } = require('../db')

const getCountries = async (req, res) => {
  try {
    const { name } = req.query
    if (name) {
      const country = await Country.findAll({ where: { name: { [Op.iLike]: `%${name}` } }, include: Activity })
      country[0]
        ? res.json(country)
        : res.status(400).send(`No se encuentra ningun pais con el nombre: ${name}`)
    } else {
      const allCountries = await Country.findAll({ include: Activity })
      return res.json(allCountries)
    }
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = getCountries