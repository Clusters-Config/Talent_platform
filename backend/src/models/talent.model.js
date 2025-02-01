import mongoose from "mongoose";


const mongo  = mongoose.Schema;

const TalentSchema = new mongo({ 
    name:{ 
        type: String,
        required:true
    },
    label: { 
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
    avail:{ 
        type: String,
        required:true,
    },
    location:{ 
        type: String,
        required:true,
    },
})

const Talent = mongoose.model('Talent',TalentSchema)

export  default Talent 