const express = require("express");
const topGainer = require("../models/topgainer.model");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const topgainer = await topGainer.find().lean().exec();
    return res.status(200).send(topgainer);
  } catch (err) {
    return res.status(500).send({message: err.message});
  }
});
// router.post("",upload.single("profilePic"),async (req,res)=>{
//     try{
//         const user= await User.create({
//             firstName:req.body.firstName,
//             lastName:req.body.lastName,
//             profilepic:req.file.path,
//         });
//         return res.status(200).send(user);
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).send({message:err.message})
//     }
// })
router.post("", async (req, res) => {
  try {
    const topgainer = await topGainer.create(req.body);
    return res.status(200).send(topgainer);
  } catch (err) {
    return res.status(500).send({message: err.message});
  }
});

module.exports = router;
