import { createPool } from 'mariadb'
import {
  DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT
} from './config.js'

const db = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  connectionLimit: 5
})

export default db
