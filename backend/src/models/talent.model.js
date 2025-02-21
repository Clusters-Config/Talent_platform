import mongoose from "mongoose";


const mongo  = mongoose.Schema;

const TalentSchema = new mongo({ 
    name:{ 
        type: String,
        required:true
    },
    skills: { 
        type: Array,
        required:true,
    },
    role:{ 
        type: String,
        required:true,
    },
    level:{ 
        type: String,
        required:true,
    },
    experience:{ 
        type: String,
        required:true,
    },
    availability:{ 
        type: String,
        required:true,
    },
    description:{ 
        type: String,
        required:true,
    },
})

const Talent = mongoose.model('Talent',TalentSchema)

export  default Talent 