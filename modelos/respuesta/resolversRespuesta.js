import { RespuestaModel } from "./respuesta.js";

const resolversRespuesta={
    Query:{
        readRespuestas: async (parent, args) => {
            const respuestas=await RespuestaModel.find({pregunta: args.pregunta}).populate('pregunta')
            return respuestas
        },

        readRespuesta: async (parent, args) => {
            if(Object.keys(args).includes('_id')){
                const respuesta = await RespuestaModel.findOne({ _id: args._id})
                return respuesta
            }else if (Object.keys(args).includes('esCorrecta')){
                const respuesta = await RespuestaModel.findOne({ esCorrecta: args.esCorrecta})
                return respuesta
            }else if (Object.keys(args).includes('seleccionada')){
                const respuesta = await RespuestaModel.findOne({ seleccionada: args.seleccionada})
                return respuesta
            }
        }
    },

    Mutation:{
        createRespuesta: async (parent, args) => {
            const nuevaRespuesta= await RespuestaModel.create({
                enunciado:args.enunciado,
                pregunta: args.pregunta,
                esCorrecta: args.esCorrecta,
                seleccinada: args.seleccinada,
            }).populate('pregunta')
            return nuevaRespuesta
        },
        updateRespuesta: async (parent, args) => {
            const editarRespuesta = await RespuestaModel.findOneAndUpdate({_id:args._id},{
                esCorrecta: args.esCorrecta,
                seleccionada: args.seleccionada,
            },{new:true}).populate('pregunta')
            return editarRespuesta
        }

    }
}