
import pg from 'pg';
import dotenv from "dotenv"

const { Client } = pg;

dotenv.config()

const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT as unknown as number;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_database = process.env.DB_DATABASE;

export async function database(query: string) {
  const client = new Client({
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_password,
    database: db_database,
  })
  await client.connect();

  const res = await client.query(query);
  console.log(res.rows[0].message);
  await client.end();
}