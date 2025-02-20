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
    social: {
        youtube:{
            type:String
        },
        twitter:{
            type:String
        },
        facebook:{
            type:String
        },
        linkedin:{
            type:String
        },
        instagram:{
            type:String
        }
    },
},{timestamps:true})


const Profile = mongoose.model('Profile',profileSchema)

export default Profile