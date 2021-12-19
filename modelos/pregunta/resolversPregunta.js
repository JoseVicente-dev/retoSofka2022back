import {PreguntaModel} from './pregunta.js'

const resolversPregunta={

    Query:{
        readPreguntas : async (parent, args)=>{
            const preguntas = await PreguntaModel.find({ronda:args.ronda}).populate('respuestas')
            return preguntas
        },
        readPregunta: async (parent, args) => {
            if(Object.keys(args).includes('_id')){
                const pregunta =await PreguntaModel.findOne({ _id:args.id})
                return pregunta
            }
            else if (Object.keys(args).includes('enunciado')){
                const pregunta =await PreguntaModel.findOne({ enunciado:args.enunciado})
                return pregunta
            }
        },
    },

    Mutation:{
        createPregunta: async (parent, args) => {
            const nuevaPregunta = await PreguntaModel.create({
                enunciado:args.enunciado,
                premio: args.premio,
                ronda: args.ronda,
            })
            return nuevaPregunta
        },
    },
}

export {resolversPregunta}
