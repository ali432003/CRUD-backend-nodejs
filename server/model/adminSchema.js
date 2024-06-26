import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Admin = mongoose.model("admin",adminSchema)
export default Admin