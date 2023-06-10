const getActivitiesHandler = require('../handlers/getActivitiesHandler')

const getActivities = async (req, res) => {
  try {
    const allActivities = await getActivitiesHandler()
    return res.json(allActivities)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = getActivities