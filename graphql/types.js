import {gql} from 'apollo-server-express'
import { tiposEnums } from '../modelos/enums/tiposEnums.js';
import {tiposJugador} from '../modelos/jugador/tiposJugador.js';
import { tiposPregunta } from '../modelos/pregunta/tiposPregunta.js';
import { tiposPremio } from '../modelos/premio/tiposPremio.js';

const tipoGobales = gql`
    scalar Date
`;

export const typeDefs = [
    tipoGobales,
    tiposEnums,
    tiposJugador,
    tiposPregunta,
    tiposPremio,
];