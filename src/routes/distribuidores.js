const {Router} = require('express');
const Distribuidor = require('../models/Distribuidores')
const router = Router()
const controller = require('../controllers/distribuidores')

router.get('/', controller.read)

router.post('/add', async(req,res) => {
    
    const distribuidor = Distribuidor(req.body);

    const distribuidorSaved = await distribuidor.save();
    
    console.log(distribuidorSaved);
    // res.send('saved')
    res.redirect("/")

})

router.get('/about',(req, res) => {
    res.render('/distribuidores/about')
});

router.get('/edit',(req, res) => {
    res.render('/distribuidores/edit')
});

// router.get('/invoice/:id', controller.invoice)
router.get('/delete/:id', async(req,res) => {
    const { id } = req.params;

    await Distribuidor.findByIdAndDelete(id);
    res.redirect('/distribuidores');
})
module.exports = router