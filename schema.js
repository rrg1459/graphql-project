// Este archivo va a contener la raiz de todas las consultas
// Para poder visualizar el esquema con colores se debe tener instalada el plugon de graphql deGrapohQL Foundation

import { gql } from 'apollo-server'
import { typeDefs as Author, resolvers as AuthorResolvers } from './author.js'
import { typeDefs as Book, resolvers as BookResolvers } from './book.js'

const rootTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }


`
export const resolvers = [BookResolvers, AuthorResolvers]

export const typeDefs = [rootTypeDefs, Author, Book]