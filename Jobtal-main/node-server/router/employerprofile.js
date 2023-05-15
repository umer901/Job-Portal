const express = require('express');
const router = express.Router();
const User = require('../model/employer');


router.post('/employerprofile', async (req,res) => {
    //getting data
    const {name, location, phoneNumber} = req.body;

    //creating new user
    const user = new User({
        name,
        location,
        phoneNumber
    });

    // deleting all previous rows that have the same 'name' element
    const deletedUser = await User.deleteMany({name: name});

    //saving in DB
    await user.save();

    res.status(201).send(user);
});

router.get('/employerprofile/:name', async (req,res) => {
    const {name} = req.params;
    console.log(name)
    try{
        const user = await User.findOne({name:name});
        console.log(user);
        res.status(200).send(user);
    }catch(e){
        res.status(400).send({error: `User with name ${name} not found`});
    }
});


module.exports = router;