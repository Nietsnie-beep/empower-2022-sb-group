const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    title:{
    type:String,
    unique:false
    },

    description:{
        type: String
    },

    provedores:String,
    done:Boolean,

    porcentaje:{
        type:Number
    },

    vendedor:{
        type:String
    },
    correoVendedor:{
        type:String
    },

    distribuidor:{
        type:String
    },

    costoTotal:{
        type:String
    }
   
},{
    timestamp: true,
    versionKey:false
})

module.exports = model('Task', taskSchema)
