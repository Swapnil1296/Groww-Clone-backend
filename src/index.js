const express= require("express")
const cors =require("cors")
const mongoose = require("mongoose")
const connect = require("./configs/db")

const userController=require("./controllers/user-controller")
const {register,login}=require("./controllers/auth-controller")

const app = express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(cors())
app.use(express.json())


app.use("/users",userController)
app.post("/register",register)
app.post("/login",login)
app.listen(4000,async()=>{
    try{
        await connect()
        console.log("Connecting on Port 4000...")
    }
    catch(err){
        console.log(err.message)
    }
})

