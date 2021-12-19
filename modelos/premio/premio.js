import pkg from 'mongoose';
const { Schema, model } = pkg;

const premioSchema = new Schema({
    tipo:{
        type:String,
        required:true,
    },
    ronda:{
        type:Number,
        required:true,
    },
    valor:{
        type:Number,
        required:true,
    }
})

const PremioModel = model('Price',premioSchema,'premios')

export {PremioModel}