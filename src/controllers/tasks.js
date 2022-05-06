const Task = require('../models/Task')
const Distribuidor = require('../models/Distribuidores')
const Clientes = require('../models/Cliente')

const read = async(req,res) => {
    const tasks = await  Task.find().lean()
    const distribuidor = await Distribuidor.find().lean()
    const clientes = await Clientes.find().lean()

    console.log(tasks);
    res.render('index', {distribuidor, tasks, clientes})
}

const invoice = async(req,res) => {
    const task = await Task.findById(req.params.id)
    const valorInt = parseInt(task.distribuidor)
    const valorTotal = await (task.porcentaje + valorInt)
    res.render('invoice', {task, valorTotal})
}

const list = async(req,res) => {
    const tasks = await  Task.find().lean()
    res.render('list',{tasks})
}

module.exports = {
    read,
    invoice,
    list,
}

