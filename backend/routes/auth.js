const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())              // ✅ necessário para o React
app.use(express.json())

const authRoutes = require('./routes/auth')
app.use(authRoutes)

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000')
})
