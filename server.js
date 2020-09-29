const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api', async (req, res) => {
  await axios
    .get(
      'http://someAPI.com' //use api-url and api-key here
    )
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      res.send(error)
    })
}),
  app.listen(4000, () => console.log('Server running on http://localhost:4000'))
