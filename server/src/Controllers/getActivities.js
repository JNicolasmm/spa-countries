const { Activity, Country } = require('../db')

const getActivities = async (req, res) => {
  try {
    const allActivities = await Activity.findAll({ include: Country })
    return res.json(allActivities)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = getActivities