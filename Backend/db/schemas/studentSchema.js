const {Schema} =require("mongoose")

const studentSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    gender:String,
    phone:String,
    altPhone:String,
    DOB:String,
    graduation:{stream:String,YOP:String,securedMark:String},
    postGraduation:{stream:String,YOP:String,securedMark:String},
    course:String,
    address:[],
    payment:{paid:Number,remaining:Number},
    password:String,
    userName:String,
})

module.exports=studentSchema