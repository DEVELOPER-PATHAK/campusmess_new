
import adminModel from "../models/adminModel";
import jwt from "jsonwebtoken";
const registerAdmin= async (req,res)=>{
    try {     
        const {name,id,email,contact,password,confirmPassword}= req.body;

        if(!name || !email || !id||  !contact || !password || !confirmPassword){
            return res.json({
                success:false,
                message:"missing details"
            })
        }

        if(password != confirmPassword){
            return res.json({
                success:false,
                message:"password and confirm password do not match"
            })
        }

        const existedUser= await adminModel.findOne({id});
        if(existedUser){
            return res.json({
                success:false,
                message:"institute with same id already registered"
            })
        }

        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const adminData={name,email,id,password,contact}

        const newAdmin= new adminModel(adminData)

        const admin= await newAdmin.save();

        const token= jwt.sign({
            id:admin._id}, process.env.JWT_SECRET)
        
        res.json({
            success:true,
            token,
            admin
        })


    } catch (error) {
         console.log(error);
                res.json({success: false,
                message: error.message
            })
    }
}


const loginAdmin= async (req,res)=>{
    const {name,id,password}= req.body
    if(!name || !id || !password){
        return res.json({
            success:false,
            message:"login details missing"
        })
    }

    const admin= await adminModel.findOne({id});
    if(!admin){
        return res.json({
            success:false,
            message:"this institute does not registered"
        })
    }

    const isMatch = await bcrypt.compare(password,admin.password)
    if(isMatch){
        co
    }
}