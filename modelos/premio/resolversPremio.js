import { PremioModel } from "./premio.js";

const resolversPremio={
    Query:{
        readPremio: async (parent, args) => {

            if(Object.keys(args).includes('_id')){
                const premio = await PremioModel.findOne({ _id:args._id})
                return premio
            }else if (Object.keys(args).includes('ronda')){
                const premio = await PremioModel.findOne({ ronda:args.ronda})
                return premio
            }
        }
    },
    Mutation:{
        createPremio: async (parent, args) => {
            const nuevoPremio=await PremioModel.create({
                tipo: args.tipo,
                valor: args.valor,
                ronda: args.ronda,
            })
            return nuevoPremio
        }
    },
}

export {resolversPremio}