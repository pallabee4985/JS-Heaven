const {model}=require('mongoose')

const studentSchema=require('../schemas/studentSchema')
const studentModel=model("students",studentSchema)

module.exports=studentModel;