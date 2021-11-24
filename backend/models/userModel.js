// import { createRequire } from 'module';
import mongoose from 'mongoose';
// const require = createRequire(import.meta.url);

// const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    isAdmin:{type:Boolean, default:false, required:true}
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);

export default User;