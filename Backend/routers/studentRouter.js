const express=require("express")

const studentRoute=express.Router()

const { postController, getController,studentLoginControll } = require("../controllers/studentControler") //importing fromstudent controller

//no. of api we r using
studentRoute.post("/",postController)
studentRoute.post("/login",studentLoginControll)
studentRoute.get("/",getController)
studentRoute.delete("/")
studentRoute.put("/")

// studentRoute.post("./student",async (req,res)=>{
//     //console.log(req.body)
//     const student=new studentModel(req.body)
//     let x=await student.save()
//         console.log(x);
//         res.send("data collected")
// })

module.exports=studentRoute