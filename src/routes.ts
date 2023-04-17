import { FastifyInstance } from "fastify"

export async function tasksRoutes (fastify: FastifyInstance) {
  fastify.get('/', async (req, reply) => {
    return { hello: 'world' }
  })

  fastify.post('/', async (req, reply) => {
    return req.body
  })

}
