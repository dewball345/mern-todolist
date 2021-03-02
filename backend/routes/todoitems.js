const router = require('express').Router();
let TodoItem = require('../models/todoitem.model');

router.route('/').get((req, res) => {
    TodoItem.find()
    .then(todoitems => res.json(todoitems))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newtodoitem = new TodoItem({
    username,
    title,
    description,
    date,
  });

  newtodoitem.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get(async function(req, res){
    try{
        let id = await TodoItem.findById(req.params.id);
        return res.json(id)
    } catch(error) {
        return res.status(400).json("Error " + error)
    }
});

router.route('/:id').delete(async function(req, res){
    await TodoItem.findByIdAndDelete(req.params.id);
    return res.json("Deleted ID")
})

router.route("/update/:id").post(async function(req, res){
    try{
        let id = await TodoItem.findById(req.params.id);
        id.username = req.body.username;
        id.title = req.body.title;
        id.description = req.body.description;
        id.date = req.body.date;

        await id.save()
        return res.json("Updated Exercise!")
    } catch(error) {
        return res.json("Error " + error)
    }
})
module.exports = router;