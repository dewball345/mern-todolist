const router = require('express').Router();
let User = require('../models/users.model')

router.route('/').get(async function (req, res){
    try{
        let find = await User.find();
        return res.json(find)
    } catch(error) {
        return res.status(400).json('Error: '+ error)
    }
});

router.route('/add').post(async function (req, res){
    const username = req.body.username;
    const newUser = new User({username});

    try{
        newUser.save();
        return res.json("added user!")
    } catch(error) {
        return res.status(400).json("Error: "+error);
    }
})
module.exports = router;