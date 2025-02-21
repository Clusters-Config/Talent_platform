import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const companySchema = new Schema({
    name:{ 
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});

const Company = mongoose.model('Company', companySchema);

export default Company;
