import { gql } from "apollo-server-express";

const tiposPremio = gql`
    type Premio{
        _id:ID!
        tipo:String!
        ronda:Int!
        valor:Float!
    }

    type Query{
        readPremio(_id:ID, ronda:String):Premio
    }

    type Mutation{
        createPremio(
            tipo:String!
            ronda:Int!
            valor:Float!
        ):Premio
    }
`

export {tiposPremio}