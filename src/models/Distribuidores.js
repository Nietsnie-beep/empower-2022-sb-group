const {Schema, model} = require('mongoose');

const distribuidoresSchema = new Schema({
    title:{
        type: String,
       
    },

    costoDeServicio:{
        type:Number,
    },

    tiempo:{
        type:Number,
    },

    origen:{
        type:String
    },

    destino:{
        type:String
    },

}, {
    timestamp: true,
    versionKey:false
})

module.exports = model('distribuidores', distribuidoresSchema)
