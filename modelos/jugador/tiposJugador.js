import { gql } from "apollo-server-express";

const tiposJugador = gql`

    type Jugador{
    _id:ID!
    identificacion:String!
    nombres:String!
    apellidos:String!
    Puntaje:Float
    fechaParticipacion:Date!
    estado:Enum_EstadoJugador!
    rondaMaxAlcanzada:Int!
    }

    type Query{
        leerJugadores:[Jugador]
        leerJugador(_id:ID,identificacion:String):Jugador
    } 

    type Mutation{
        createJugador(identificacion:String!,nombres:String!,apellidos:String!):Jugador
    
    }

`

export {tiposJugador}