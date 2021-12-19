import { gql } from "apollo-server-express";

const tiposPregunta = gql`

    type Pregunta{
        _id:ID!
        enunciado:String!
        premio:Premio!
        ronda:Int!
        respuestas:[Respuesta]!    
    }

    type Query{
        readPreguntas(ronda:Int!):[Pregunta]
        readPregunta(_id:ID,enunciado:String):Pregunta    
    }

    type Mutation{
        createPregunta(
            enunciado:String!
            premio:ID!
            ronda:Int!
        ):Pregunta

    }

`