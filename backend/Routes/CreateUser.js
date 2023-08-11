const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/CreateUser", async (req,res) =>{
    try {
        await User.create({
            name: "Jagrit",
            password: "12345678",
            email: "vermajagrit11@gmail.com",
            location: "Noida"
        })
    res.json({success:true});

     }  catch(error){
           console.log(error)
           res.json({success:false});
     }
})

module.exports = router;