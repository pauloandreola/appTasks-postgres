import { FastifyInstance } from "fastify"

export async function tasksRoutes (fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.post('/', async (request, reply) => {
    // return { hello: 'world' }
  })

}
