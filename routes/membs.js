const express = require('express'); //import express

const router  = express.Router(); 

const membController = require('../controllers/membs'); 

app.post('/membs', (req,res,next) => {
    console.log(req.body) 
    console.log(req.body.Name)
    const newmemb = {
        "Name" : req.body.Name,
        "Major" : req.body.Major
    }
    res.send({})
} ) 
router.post('/membs', membController.newmemb); 

// router.get('/membs', membController.getAllmemb);

// router.delete('/membs', membController.deleteAllmemb);

// router.get('/membs/:Name', mambController.getOnememb);
// router.post('/membs/:Name', membController.newComment);
// router.delete('/membs/:Name', membController.deleteOnememb);


module.exports = router; // export to use in server.js
