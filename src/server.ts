// import { database } from './database.js';
import Fastify from 'fastify';
import dotenv from "dotenv"
import { tasksRoutes } from './routes';

dotenv.config()

export const app = Fastify({
  logger: true
})

app.register(tasksRoutes)

const port = process.env.PORT as unknown as number || process.env.LOCAL_PORT as unknown as number;

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
