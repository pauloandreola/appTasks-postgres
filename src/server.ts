// import { database } from './database.js';
import Fastify from 'fastify';
import dotenv from "dotenv"
import { tasksRoutes } from './routes';

dotenv.config()

export const app = Fastify({
  logger: true
})

app.register(tasksRoutes)

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
