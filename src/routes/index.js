const {Router} = require('express');
const Task = require('../models/Task')
const router = Router()
const controller = require('../controllers/tasks')

router.get('/', controller.read)

router.get('/home',  async(req,res) => {
    // res.send('saved')
    res.render("home")

})


router.post('/tasks/add', async(req,res) => {
    
    const task = Task(req.body);

    const taskSaved = await task.save();

    
    console.log(taskSaved);
    // res.send('saved')
    res.redirect("/")

})

router.get('/list', controller.list);

router.get('/about',async(req, res) => {


    res.render('about')
});

router.get('/edit/:id',async(req, res) => {
    const task = await Task.findById(req.params.id).lean();

    res.render('edit',{task})
});

router.get('/invoice/:id', controller.invoice)

router.post("/edit/:id",async(req,res) => {
    const { id } = req.params;

    await Task.findByIdAndUpdate(id, req.body)

    console.log(req.body);

    res.redirect("/");
});

router.get('/delete/:id', async(req,res) => {
    const { id } = req.params;

    await Task.findByIdAndDelete(id);
    res.redirect('/');
})

module.exports = router
