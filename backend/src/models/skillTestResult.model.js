import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SkillTestResultSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    testDate: {
        type: Date,
        default: Date.now
    },
    testBehaviors: {
        type: Object,
        default: {}
    }
});

const SkillTestResult = mongoose.model('SkillTestResult', SkillTestResultSchema);

export default SkillTestResult;
