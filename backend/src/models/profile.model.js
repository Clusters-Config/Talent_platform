import mongoose from "mongoose";


const Schema = mongoose.Schema;

const profileSchema = new Schema({ 
    username:{ 
        type:String,
        required:true,
        unique:true
    },
    firstname:{ 
        type:String,
        required:true
    },
    
},{timestamps:true})


const Profile = mongoose.model('Profile',profileSchema)

export default Profile