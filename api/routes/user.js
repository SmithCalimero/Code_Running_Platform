const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const CryptoJS = require('crypto-js');
const {v4:uuidv4} = require('uuid');

// 1.Login                  - POST
// 2.Creating an account    - POST

router.get('/', (req,resp)=>{
    resp.end("user route");
});
router.post('/', (req,resp)=>{
    let userObj = req.body; //this has the email and password fields
    userObj.password = CryptoJS.encrypt(userObj.password, 'naovejasomeucodigo').toString();
    userObj['userid'] = uuidv4(); //this will generate a random string
    let newUser = new userModel(userObj);
    newUser.save().then((doc)=>{
        resp.json({error:false, response: doc})
    }).catch((err)=>{
        console.log(err);
        resp.json({error: true, message:'Error in creating doc'});
    });
});

router.post('/login',(req,res)=>{ // localhost:3000/users/login
    let data = req.body;
    userModel.findOne({email: data.email}).then((userDoc)=>{
        if(userDoc == null){
            res.json({error: true, message:'Account does not exist'})
        }
        else {
            let decryptedPassword = CryptoJS.AES.decrypt(userDoc.password, 'naovejasomeucodigo').toString(CryptoJS.enc.Utf8);
            if(decryptedPassword == data.password){
                res.json({error : false, response: userDoc}); //if everything goes alright
            }
            else{
                res.json({error : true, message: 'Incorrect login data'}); //if the password is incorrect
            }
        }
    }).catch();
})

module.exports = router;