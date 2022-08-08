const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.post('/register', async(req, res) => {
    // console.log(req.body);
    // res.json({message: req.body});
    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please fill the fields"});
    }

    // User.findOne({email: email}).then((userExist)=>{
    //     if(userExist){
    //         return res.status(422).json({error: "Email already exists"});
    //     }

    //     const user = new User({name, email, phone, work, password, cpassword});
    //     user.save().then(()=>{
    //         res.status(201).json({message: "user registered successfully"});
    //     }).catch((e)=>{
    //         res.status(500).json({error: "Failed to register"});
    //     })

    // }).catch((err)=>{
    //     console.log(err);
    // })


    try {
        const userExist = await User.findOne({email: email})
        
        
        if(userExist){
            return res.status(422).json({error: "Email already exists"});
        }

        const user = new User({name, email, phone, work, password, cpassword});


        


            const userRegister = await user.save();

            if(userRegister){
                res.status(201).json({message: "user registered successfully"});
            }
    
    } catch (error) {
        console.log(error);
    }


  })

  router.post('/signin', async(req, res)=>{
      try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "Please fill the data"})
        }

        const userLogin = await User.findOne({email: email});
        if(!userLogin){
        res.status(400).json({message: "Error"})
        }else{
            res.json({message: "User Signin Successfully"});
        }

      } catch (error) {
          
      }
  })

module.exports = router;