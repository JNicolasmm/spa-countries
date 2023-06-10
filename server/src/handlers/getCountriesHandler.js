const { Op } = require("sequelize")
const { Country, Activity } = require('../db')

const getCountriesHandler = async (name) => {
  try {
    if (name) {
      const country = await Country.findAll({ where: { name: { [Op.iLike]: `%${name}` } }, include: Activity })
      if (country[0]) return country
      else return { error: `No se encuentra ningun pais con el nombre: ${name}` }
    } else {
      const allCountries = await Country.findAll({ include: Activity })
      return allCountries
    }
  } catch (error) {
    return error.message
  }
}

module.exports = getCountriesHandler