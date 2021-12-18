import { Schema, model } from 'mongoose';

const jugadorSchema = new Schema({
    identificacion:{
        type:String,
        require:true,
        unique:true,
    },
    nombres: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    estado:{
        type:String,
        default:'ACTIVO',//Valores: ACTIVO, GANADOR, DERROTADO, RETIRO_VOLUNTARIO
        required:true
    },
    puntaje:{
        type:Number,
        default:0,
    },
    fechaParticipacion:{
        type:Date,
        required: true,
    },
    rondaMaxAlcanzada:{
        type:Number,
        required:true,
        default:1
    }
})

const JugadorModel= model('Player', jugadorSchema,'Jugadores')

export {JugadorModel}