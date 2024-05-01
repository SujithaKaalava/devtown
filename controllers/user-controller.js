const { BooksModel, UsersModel } =require("../models/index")
const usersModel = require("../models/users-model")

exports.getAllUsers=async (req,res)=>{
    const users= await UsersModel.find()

    if(users.length===0){
        return res.status(404).json({
            success:false,
            message:"no users found ..."
        })
    }
    return res.status(200).json({
        success:true,
        message:"the userss are ...",
        data:users
    })
}

//new user creation
exports.createUser=async(req,res)=>{
    const {data}=req.body
    if(!data){
        return res.status(404).json({
            success:true,
            message:"provide valid info.......",
            
        })
    }
    await UsersModel.create(data)
    const allUsers=await UsersModel.find()
    return res.status(200).json({
        success:true,
        message:"user created succssfully...",
        data:allUsers
    })
}


//get user by id
exports.getUserById=async(req,res)=>{
    const {id}=req.params
    const user=await UsersModel.findById(id)

    if(!user){
        return res.status(404).json({
            success:false,
            message:"user does not found wit this is"
        })
    }
    return res.status(200).json({
        success:true,
        data:user
    })
}

//update user by id

exports.updateUserById=async(req,res)=>{
    const {id}=req.params
    const user=UsersModel.findById(id)
    const {data}=req.body
    if(!user){
        return res.status(404).json({
            success:false,
            message:"user not found wit this id"
        })
    }
    const updateduser=await UsersModel.findOneAndUpdate({_id:id},data,{new:true})
    return res.status(200).json({
        success:true,
        data:updateduser
    })

}

//delete user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UsersModel.deleteOne({ _id: id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Doesn't Exist !!",
      });
    }
    return res
      .status(200)
      .json({ success: true, message: "Deleted User..", data:await UsersModel.find()});
  };
  

