const { Activity, Country } = require('../db')

const getActivitiesHandler = async () => {
  try {
    const activities = await Activity.findAll({ include: Country })
    return activities
  } catch (error) {
    return error.message
  }
}

module.exports = getActivitiesHandler