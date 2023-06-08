const axios = require('axios')

let info = []

const dbLoad = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/countries')
    data.forEach(el => {
      info.push({
        id: el.cca3,
        name: el.name.common,
        image: el.flags.png,
        continente: el.region,
        capital: el.capital, 
        subregión: el.subregion,
        area: el.area,
        poblacion: el.population
      })
    })
  } catch (error) {
    console.log(error);
  }
}

dbLoad()

module.exports = info