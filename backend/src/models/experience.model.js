import mongoose from 'mongoose';

const mongo = mongoose.Schema;

const ExpSchema = new mongo({ 
    title:{ 
        type: String,
        required:true
    },
    employment:{ 
        type: String,
        required:true,
    },
},{timestamps:true})


const Experience = mongoose.model('Experience',ExpSchema)

export default Experience