import { Pool } from 'pg'

const connection = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASS,
  port: parseInt(process.env.DATABASE_PORT!),
})

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to database.");
});

export default connection;