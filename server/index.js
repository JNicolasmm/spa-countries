const axios = require('axios')
const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const PORT = 3001;
const info = require('./src/dbLoad')

conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    await Country.bulkCreate(info)
    console.log(`Server listening on port ${PORT}`)
  })
}).catch(error => console.error(error))
