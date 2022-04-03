
const jwt = require("jsonwebtoken")
const User = require("../models/user-model")
require('dotenv').config()


const newtoken = (user)=>{
    // console.log(process.env.SECRET_KEY)
    return jwt.sign({ user }, process.env.SECRET_KEY);
}  

//Register
const register = async(req,res)=>{
    try{

        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).send({message:"Email already exits"})
        }
        user = await User.create(req.body)
         const token = newtoken(user)
        // const token = jwt.sign({ user }, 'mernstack');
        return res.status(200).redirect(req.body.link)

    }
    catch(err){
       res.status(500).send(err.message)
    }
}

//login

const login = async(req,res)=>{
    try{

        const  user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send({message:"Wrong email or password"})
        }
        
        //check Password
        const match = user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send({message:"Wrong email or password"})
        }
        const token = newtoken(user)
        // const token = jwt.sign({ user }, 'mernstack');
        return res.status(200).redirect(`http://127.0.0.1:5500/groww_clone-main/index.html`)


    }
    catch(err){
        res.status(500).send(err.message)
    }
}

module.exports= {register,login}
