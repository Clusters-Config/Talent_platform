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
    title: {
        type: String,
    },
    languages: {
        type: String,
    },
    age: {
        type: String,
    },
    currentSalary: {
        type: String,
    },
    expectedSalary: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    country: {
        type: String,
    },
    postcode: {
        type: String,
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    },
},{timestamps:true})


const Profile = mongoose.model('Profile',profileSchema)

export default Profile
