import mongoose from "mongoose";


const Schema = mongoose.Schema;

const candidateSchema = new Schema({ 
    name:{ 
        type:String,
        required:true
    },
    headline:{ 
        type:String,
        required:true,
    },
    skills:{ 
        type:Array,
        required:true,
    },
    location:{ 
        type:String,
        required:true,
    },
    experience:{ 
        type:String,
        required:true,
    },
    availability:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    }
})

const Candidate = mongoose.model('Candidate', candidateSchema);
export default Candidate;