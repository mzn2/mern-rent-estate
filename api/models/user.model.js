import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        requered: true,
        unique:true,
    },
    email:{
        type:String,
        requered: true,
        unique:true,
    },
    password:{
        type:String,
        requered: true,
    }
}, {timestamps: true});
const User = mongoose.model("User", userSchema);
export default User;