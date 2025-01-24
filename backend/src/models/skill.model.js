import mongoose from 'mongoose';

const mongo = mongoose.Schema;

const JobSchema = new mongo({ 
     title:{ 
        type: String,
        required:true
     },
     content:{ 
         type: String,
         required:true
     },
     name:{ 
        type: Number,
        default:0
     },
     position:{ 
         type: Number,
         default:0
     }
},{timestamps:true})

const Skill = mongoose.model('Skill',JobSchema)

export default Skill