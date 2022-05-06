
const Distribuidor = require('../models/Distribuidores')


const read = async(req,res) => {
    const distribuidores = await  Distribuidor.find().lean()

    console.log(distribuidores);
    res.render('distribuidores/index', {distribuidores})
}



module.exports = {
    read,
}

