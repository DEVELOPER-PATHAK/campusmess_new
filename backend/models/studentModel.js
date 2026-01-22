import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required:true
    },
    scholarNo:{
        type:Number,
        required:true
    },
    instituteName:{
        type:String,
        required:true,
    },
    email:{
         type: String,
        // required:true,
        unique:true
    },
    password:{
         type: String,
        required:true
    },

})


const studentModel = mongoose.models.student || mongoose.model("student", studentSchema)

export default studentModel