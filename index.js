import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './schema.js'

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  const { url } = await server.listen()
  console.log('Server is runnig on', url)
}

startApolloServer()