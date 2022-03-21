
# GraphQL Modularizado en multiples archivos (usando Apollo)

fuentes:

### GraphQL Modularizado en multiples archivos (usando Apollo)
https://www.youtube.com/watch?v=_YN_fs-fuaI&ab_channel=FaztCode

### Modularización de su código de esquema GraphQL
https://www.apollographql.com/blog/backend/schema-design/modularizing-your-graphql-schema-code/

---

 $ `npm init -y` (para poder crear un archivo package.json para poder instalar dependencias)

 $ `npm install apollo-server graphql`

Para poder ejecutar el servidor:

 $ `node index.js`

Agregar "type": "module", en package.json para habilitar la importación de módulos en node.

Los resolvers son funciones que nos van a permitir devolver "algo"

Con Ctrl + Espacio se puedeb ver las variables disponibles para los queries y mutaciones

http://localhost:4000

Algunos querys

```
{
  book(id: 10) {
    title
    id
    author {
      firstName
    }
  }
}
  

  {
  author(id: 30) {
    firstName
    firstName
    lastName
    id
    books {
      title
    }
  }
}

mutation {
  createAuthor (firstName: "asqsaasas")
}
```
## Consejos finales

Acabamos de pasar por la mecánica de modularizar el código de su servidor. Aquí hay algunos consejos adicionales que pueden ser útiles para descubrir cómo dividir su base de código:

1. Al aprender, crear prototipos o incluso crear un POC, poner todo el esquema en un solo archivo probablemente esté bien: Hay beneficios para poder revisar todo el esquema muy rápidamente o explicárselo a un compañero de trabajo.
2. Puede organizar su esquema y resolutores por característica: por ejemplo, juntar las cosas relacionadas con el sistema de pago podría tener sentido en un sitio de comercio electrónico.
3. Mantenga sus resolutores en el mismo archivo que la definición de esquema para los campos que implementan. Esto le permitirá razonar sobre su código de manera eficiente.
4. Envuelva sus definiciones de tipo SDL con una  `gql` etiqueta usando  **graphql-tag**. Si está utilizando un complemento de GraphQL para su editor o formateando su código con Prettier, podrá obtener resaltado de sintaxis para SDL dentro de su editor de código siempre que le prefije la `gql` etiqueta.

SDL (Specific Domain Language)