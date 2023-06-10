const { Country, Activity } = require('../db')

const getCountryByIdHandler = async (id) => {
  try {
    const country = await Country.findOne({ where: { id: id }, include: Activity })
    if (country) return country
    else return {error: `No se encuentra ningun pais con el id: ${id}`}
  } catch (error) {
    return error.message
  }
}

module.exports = getCountryByIdHandler