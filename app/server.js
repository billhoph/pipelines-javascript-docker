const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Prisma Cloud Azure Devops Integration Demo for FWD')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
