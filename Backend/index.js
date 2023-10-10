const express=require ("express")

const PORT=7777;
const hostname="127.0.0.7"

const app=express()

//database
const dbConnect=require("./db/db");
//const studentModel = require("./db/models/studentModel");  //student controller

//frontend to backend connectivity
const cors=require("cors")
app.use(cors());

//routing files
const studentRoute=require("./routers/studentRouter")

//middleware
app.use(express.json())

//route
app.use("/student",studentRoute)  //for path it will go to student router


// app.post("/student",async(req,res)=>{        //student router
//     // console.log(req.body);  //connect with mongo for data with id
//     const student=new studentModel(req.body)
//     let x=await student.save()
//     console.log(x);
//     res.send("data collected")
// })


app.listen(PORT,hostname,async()=>{
    await dbConnect()
    console.log(`server started at http://${hostname}:${PORT}`);
})