const express = require("express");
const router = express.Router();
const userModel= require("../models/userModel");
    

// router.post("/create",async(req,res)=>{
//     // console.log(req.body)
//     const{golfCourseName,golfCourseLocation}=req.body;
//     console.log({golfCourseName,golfCourseLocation});
//     try{
//         const user = new userModel({
//             golfCourseName,golfCourseLocation
//         })
//         const newuser = await user.save();
//         res.status(201).json({user:newuser});
//         console.log("Inserted USER");
//     }catch(e){
//         console.log(e.message);
//         // res.status(500).send('Error occur in inserting a user');
//     }
// })fdfgd

router.get("/getUser",async(req,res)=>{
    //  const name = req.params.golfCourseName;
    //   console.log("name",name)
      try {
       // // const result = await userModel.findOne({golfCoursseName:name}).exec()
        const result = await userModel.find()
        console.log({result})
        res.send(result)
      } catch (error) {
        console.error(error)
      }
})


router.get("/one/:golfCourseName",async(req,res)=>{
    const name = req.params.golfCourseName;
      try {
       // // const result = await userModel.findOne({golfCoursseName:name}).exec()
        const result = await userModel.findOne({golfCourseName:name}).exec()
        console.log({result})
        res.send(result)
      } catch (error) {
        console.error(error)
      }
})


module.exports=router;