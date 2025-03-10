import mongoose from 'mongoose';

const mongo = mongoose.Schema;

const RegisterSchema = new mongo({
    firstname:{ 
        type: String,
    },
    lastname:{ 
        type:String
    },
     username:{ 
       type: String,
       required:true,
       unqiue:true
    },
    password:{ 
        type: String,
        max:8,
        required:true,
    },
    connection:{ 
        type:[mongo.Types.ObjectId.Mixed],
        ref:'Experience',
    }
},{timestamps:true})


const Register = mongoose.model('Register',RegisterSchema)

export default Register