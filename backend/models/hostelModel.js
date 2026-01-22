import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema({
    hostelNo:{
        type:Number,
        required:true
    },
    hostelName:{
        type:String,
        required:true,
    },
    instituteId:{
         type:Number,
        required:true,
        unique:true,
    },
    studentIntake:{
        type:Number,
        default:0
    },

    students:{
         type: mongoose.Schema.Types.ObjectId,
        ref: "studentModel" 
    }
})


const hostelModel = mongoose.models.hostel ||  mongoose.model("hostel", hostelSchema);

export  default hostelModel


