const { Activity } = require('../db')

const getActivities = async (req, res) => {
  try {
    const allActivities = await Activity.findAll()
    return res.json(allActivities)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = getActivities