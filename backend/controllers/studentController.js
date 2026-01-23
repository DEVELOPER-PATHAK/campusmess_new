import studentModel from "../models/studentModel";
const loginStudent = async(req,res)=>{
    try {
        const {name ,scholarNo,institutId,password,hostelNo}= req.body;
        if(!name || !scholarNo || !password ||!hostelNo || !institutId){
            return res.json({
                success:false,
                message:"login details missing"
            })
        }

        const student= await studentModel.findOne({institutId,scholarNo})

        if(!student){
            return res.json({
                success:false,
                message:"student does not exists"
            })
        }

        const isMatch = await bcrypt.compare(password,student.password)

        if(isMatch){
             const token = jwt.sign({id:student._id},process.env.JWT_SECRET)
              res.json({
             success:true,
             token,
             student
    })
        }
        else{
              return res.json({
            success:false,
            message:"invalid credentials"
        })
        }


    } catch (error) {
         console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

