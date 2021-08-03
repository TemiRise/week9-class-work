const express = require('express');//declares express
const User = require('../models/UserModel');
const router = express.Router(); // declared variable to make use of the router
router.post ('/SignUp', async (req, res)=>{ //signup endpoint
   
    try {
        let {firstName, lastName, email, password} = req.body;
        const checkEmail = await User.findOne({email});
        if (checkEmail) {
            return res.json({
                status: "failed",
                message: "Email already exist",
            });

        }
        const newUser = {firstName, lastName, email, password};
        const createUser = await User.create(newUser);
        res.status(201).json({
            status: "success",
            data: {
                id: createUser._id,
                firstName: createUser.firstName,
                lastName: createUser.lastName,
                email: createUser.email,
            },
        })
        
    }catch (error){
        res.json(error)
    
      
    }
});

module.exports = router;