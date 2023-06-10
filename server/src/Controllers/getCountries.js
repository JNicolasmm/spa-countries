const getCountriesHandler = require('../handlers/getCountriesHandler')

const getCountries = async (req, res) => {
  try {
    const { name } = req.query
    const countries = await getCountriesHandler(name)
    countries.error
      ? res.status(400).send(countries.error)
      : res.json(countries)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = getCountries