const express = require('express');
const router = express.Router();
router.post ('/SignUp', (req, res)=>{
    console.log(req.body)
});

module.exports = router;