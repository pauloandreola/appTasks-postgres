// import { database } from './database.js';
import Fastify from 'fastify';
import dotenv from "dotenv"

dotenv.config()

const app = Fastify({
  logger: true
})

app.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// app.post('/tasks', (req, res) => {
//   const task = req.body;
//   res.send('POST request to the homepage');
// })

const port = 3000;

const start = async () => {
  try {
    const response = await app.listen({ port })
    console.log(`Server running at port  => ${response}`);
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()
