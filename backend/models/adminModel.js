import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true,
        unique:true,
    },
     email:{
         type: String,
        required:true,
        unique:true
    },
     contact:{
         type: String,
        // required:true,
        unique:true
    },
       password:{
         type: String,
        required:true
    },
       confirmPassword:{
         type: String,
        required:true
    },
    studentLimit:{
        type:Number,
        default:10
    },
    currentIntake:{
        type:Number,
        default:0
    },
      hostels: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hostelModel" 
  }

})

const adminModel = mongoose.models.admin || mongoose.model("admin", adminSchema)

export  default adminModel