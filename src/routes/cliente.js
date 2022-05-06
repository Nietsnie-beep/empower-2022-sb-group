const {Router} = require('express');
const Cliente = require('../models/Cliente')
const router = Router()
const controller = require('../controllers/distribuidores')

router.get('/', async(req,res) => {
    const cliente = await Cliente.find().lean()

    console.log(cliente);
    res.render('cliente/index', {cliente})
})

router.post('/add', async(req,res) => {
    
    const cliente = Cliente(req.body);

    const clienteSaved = await cliente.save();
    
    console.log(clienteSaved);
    // res.send('saved')
    res.redirect("/")

})

router.get('/about',(req, res) => {
    res.render('/cliente/about')
});

router.get('/edit',(req, res) => {
    res.render('/cliente/edit')
});


router.get('/delete/:id', async(req,res) => {
    const { id } = req.params;

    await Cliente.findByIdAndDelete(id);
    res.redirect('/cliente');
})
// router.get('/invoice/:id', controller.invoice)

module.exports = router