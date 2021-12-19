import pkg, { SchemaTypes } from 'mongoose';
const { Schema, model } = pkg;

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

const PreguntaModel = model('Question',preguntaSchema,'preguntas')

export {PreguntaModel}