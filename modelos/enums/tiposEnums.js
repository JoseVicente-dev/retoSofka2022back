import { gql } from "apollo-server-express";

const tiposEnums = gql`
    scalar Date

    enum Enum_EstadoJugador { 
        ACTIVO
        GANADOR
        DERROTADO
        RETIRO_VOLUNTARIO
    }
`;

export { tiposEnums };