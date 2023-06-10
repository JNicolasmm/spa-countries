const getCountryByIdHandler = require('../handlers/getCountryByIdHandler')

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params
    const country = await getCountryByIdHandler(id)
    country.error
      ? res.status(400).send(country.error)
      : res.json(country)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = getCountryById