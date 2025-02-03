import mongoose from "mongoose";

const mongo = mongoose.Schema; 

const ProfileSchema = new mongo({ 
    connection:{ 
        type:mongoose.Schema.Types.ObjectId,    
        ref:'Network',
        default:[]
    }
},{timestamps:true})    

const Profile = mongoose.model('Profile',ProfileSchema)

export  default Profile 