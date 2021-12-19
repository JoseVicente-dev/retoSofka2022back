import pkg, { SchemaTypes } from 'mongoose';
const { Schema, model } = pkg;
import{PremioModel} from '../premio/premio.js'

const preguntaSchema = new Schema({
    enunciado:{
        type:String,
        required:true,
        unique:true
    },
    ronda:{
        type:Number,
        required:true,
    },
    premio:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:PremioModel,
    },
})

projectSchema.virtual("respuestas", {
    ref: "Answer",
    localField: "_id",
    foreignField: "pregunta",
});


const PreguntaModel = model('Question',preguntaSchema,'preguntas')

export {PreguntaModel}