const Fastify = require('fastify')
const PORT = process.env.PORT || 4500
const fastify = Fastify({
  logger: true
})


fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// routes . . . 
fastify.register(require('./route/todo'),{ prefix: '/todo' })


const start = async () => {
  try {
    await fastify.listen({ port: PORT ,host:'0.0.0.0'})
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

