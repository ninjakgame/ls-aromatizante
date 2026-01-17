const express = require('express')
const app = express()

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Pedro' }
  ])
  res.send("Api FUncionando!")
})

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000')
})
