import { gql } from "apollo-server-express";

const tiposRespuesta = gql`
    type Respuesta{
        _id:ID!
        enunciado:String!
        esCorrecta:Boolean!
        pregunta:Pregunta!
        seleccionada:Boolean!
    }

    type Query{
        readRespuestas(pregunta:ID!):[Respuesta]
        readRespuesta(_id:ID, esCorrecta:Boolean, seleccionada:Boolean):Respuesta
    }

    type Mutation{
        createRespuesta(
            enunciado:String!
            pregunta:ID!
            esCorrecta:Boolean
            seleccionada:Boolean
        ):Respuesta

        updateRespuesta(_id:ID!,seleccionada:Boolean,esCorrecta:Boolean):Respuesta
    }
`
export {tiposRespuesta}