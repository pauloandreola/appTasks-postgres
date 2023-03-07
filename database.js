
import pg from 'pg';
const { Client } = pg;

export async function database(query) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
  })
  await client.connect();

  const res = await client.query(query);
  console.log(res.rows[0].message);
  await client.end();
}