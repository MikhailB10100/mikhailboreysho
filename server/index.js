require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}))

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()