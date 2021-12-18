import {gql} from 'apollo-server-express'
import { tiposEnums } from '../modelos/enums/tiposEnums.js';
import {tiposJugador} from '../modelos/jugador/tiposJugador.js';

const tipoGobales = gql`
    scalar Date
`;

export const typeDefs = [
    tipoGobales,    
    tiposEnums,
    tiposJugador,
];