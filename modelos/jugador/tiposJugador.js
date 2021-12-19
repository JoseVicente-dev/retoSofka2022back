import { gql } from "apollo-server-express";

const tiposJugador = gql`

    type Jugador{
    _id:ID!
    identificacion:String!
    nombres:String!
    apellidos:String!
    puntaje:Float
    fechaParticipacion:Date!
    estado:Enum_EstadoJugador!
    rondaMaxAlcanzada:Int!
    }

    type Query{
        readJugadores:[Jugador]
        readJugador(_id:ID,identificacion:String):Jugador
    } 

    type Mutation{
        createJugador(identificacion:String!,nombres:String!,apellidos:String!):Jugador        
        updateJugador(identificacion:String!,puntaje:Float,estado:Enum_EstadoJugador,rondaMaxAlcanzada:Int):Jugador
    }

`

export { tiposJugador }