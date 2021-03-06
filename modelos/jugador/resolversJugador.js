import { JugadorModel } from './jugador.js'

const resolversJugador = {

    Query: {
        readJugadores: async (parent, args) => {
            const jugadores = await JugadorModel.find()
            return jugadores
        },

        readJugador: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {

                const jugador = await JugadorModel.findOne({ _id: args._id })
                return jugador
            } else if (Object.keys(args).includes("identificacion")) {
                const usuario = await JugadorModel.findOne({
                    identificacion: args.identificacion,
                });
                return jugador;
            }
        },
    },

    Mutation:{
        createJugador: async (parent, args) => {
            const nuevoJugador = await JugadorModel.create({
                identificacion: args.identificacion,
                nombres: args.nombres,
                apellidos: args.apellidos,
                fechaParticipacion: Date.now(),
            })
            return nuevoJugador
        },
        updateJugador: async (parent, args) => {
            const actualizarJugador = await JugadorModel.findOneAndUpdate({identificacion:args.identificacion},{
                puntaje:args.puntaje,
                estado:args.estado,
                nivelMaxAlcanzado: args.nivelMaxAlcanzado,
            },{new:true})

            return actualizarJugador
        },
    },
}

export {resolversJugador}