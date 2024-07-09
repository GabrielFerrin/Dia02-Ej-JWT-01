import express from 'express'
import morgan from 'morgan'
import db from './db.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', async (req, res) => {
  let conn
  try {
    conn = await db.getConnection()
    const rows = await conn.query('SELECT * FROM auth')
    res.json(rows)
  } catch (error) {
    console.log(error)
  } finally {
    if (conn) conn.end()
  }
})

export default app
