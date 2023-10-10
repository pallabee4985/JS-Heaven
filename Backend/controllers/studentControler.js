const studentModel = require("../db/models/studentModel");


const postController=async(req,res)=>{
    // console.log(req.body);
    let {email}=req.body
    //creating fields in mongo db (inserting data)
    let isUserAvailable=await studentModel.findOne({email:email})
    if(isUserAvailable){
        res.send({message:"User is already existed please login with the same email"})
    }
    else{
        const student=new studentModel(req.body)  
        student.save()
        res.status(201).send({message:"successfully registered"})
    }
}



const getController=async(req,res)=>{
    let data= await studentModel.find()
    console.log(data);
    res.json(data)
}


const studentLoginControll=async(req,res)=>{
    console.log(req.body);
    let studentDetails=await studentModel.findOne({email:req.body.email})
    if(studentDetails){
        if(studentDetails.password==req.body.password){
            let studentData=await studentModel.findOne({email:req.body.email}).select("-password")
            res.send(studentData)
        }
        else{
            res.send({msg:"PASSWORD is incorrect try again"})
        }
    }
    else{
        res.send({msg:"user not found"})
    }
    
    
}

module.exports={postController,getController,studentLoginControll}