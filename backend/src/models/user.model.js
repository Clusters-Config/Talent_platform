import mongoose from 'mongoose';

const mongo = mongoose.Schema;

const NetworkSchema = new mongo({ 
    name:{ 
       type: String,
       max:6,
       required:true,
       unqiue:true
    },
    description:{ 
        type: String,
        min:5,
        required:true,
    }
},{timestamps:true})


const Network = mongoose.model('Network',NetworkSchema)

export default Network
