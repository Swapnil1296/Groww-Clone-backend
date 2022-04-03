const mongoose= require('mongoose')
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    firstName:{type:String,required:false},
    lastName:{type:String,required:false},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    mobileNumber:{type:Number,required:false},
    link:{type:String, required:true}
},{
   versionKey:false,
    timestamps:true
})

userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash
    return next()
})

userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user",userSchema)
module.exports=User