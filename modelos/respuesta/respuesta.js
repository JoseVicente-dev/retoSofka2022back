import pkg from 'mongoose';
const { Schema, model } = pkg;
import {PreguntaModel} from '../pregunta/pregunta.js'

const respuestaSchema = new Schema({
    enunciado:{
        type:String,
        required: true,
    },
    esCorrecta:{
        type:Boolean,
        required:true,
        default:false,
    },
    pregunta:{
        type:Schema.Types.ObjectId,
        ref:PreguntaModel,
        required: true,
    },
    seleccionada:{
        type:Boolean,
        required: true,
        default:false,
    }
})

const RespuestaModel = model('Answer',respuestaSchema,'respuestas')

export {RespuestaModel}