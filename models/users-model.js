const mongoose=require("mongoose")
const schema=mongoose.Schema
const userschema=new schema(
    {
       name:{
        type:String,
        required:true
       }
       ,
       surname:{
        type:String,
        required:true
       }
       ,
       email:{
        type:String,
        required:true
       },
       issuedBook:{
        //foriegn key refrencial intigrity
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:false
       } ,
       returnDate:{
        type:String,
        required:false
       } ,
       
       subscriptionType:{
        type:"String",
        required:true
       },
       subscriptionDate:{
        type:"String",
        required:true
       },

    },
    {
        timestamps:true
    }
)


module.exports=mongoose.model("User",userschema)