import mongoose from "mongoose";


const Schema = mongoose.Schema;

const profileSchema = new Schema({ 
    name:{ 
        type:String,
        required:true
    },
    description: { 
        type:String,
        required:true
    },
    skills: {
        type:[String],
        required:true
    },
    level: {
        type:String,
        required:true
    },
    experience:{ 
        type:[String],
        required:true
    },
    education:{ 
        type:[String],
        required:true
    },
},{timestamps:true})


const Profile = mongoose.model('Profile',profileSchema)

export default Profile