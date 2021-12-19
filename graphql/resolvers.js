import { resolversJugador } from "../modelos/jugador/resolversJugador.js";
import { resolversPregunta } from "../modelos/pregunta/resolversPregunta.js";
import { resolversPremio } from "../modelos/premio/resolversPremio.js";

export const resolvers = [
  resolversJugador,
  resolversPregunta,
  resolversPremio,
]