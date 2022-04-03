const express= require("express")
const cors =require("cors")
const mongoose = require("mongoose")
const connect = require("./configs/db")

const productcontroller = require("./controllers/stocksinew.controller");
const topGainerController = require("./controllers/topgainer.controller");
const toplooserController = require("./controllers/toplooser.controller");
const popularFundController = require("./controllers/popualrfunds.controller");
const userController = require("./controllers/user-controller")
const {register,login}=require("./controllers/auth-controller")

const app = express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(cors())
app.use(express.json())

app.use("/products", productcontroller);
app.use("/topgainers", topGainerController);
app.use("/toploosers", toplooserController);

//FOR MUtual funds page
app.use("/popularfunds", popularFundController);
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

