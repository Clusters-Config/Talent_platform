import SkillTestResult from "../models/skillTestResult.model.js";

const postSkillTestResult = async (req, res) => {
    try {
        const { username, score, testBehaviors } = req.body;

        const newSkillTestResult = new SkillTestResult({
            username,
            score,
            testBehaviors
        });

        await newSkillTestResult.save();
        res.status(200).json({
            msg: 'Skill test result posted in the db'
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Error in the network'
        });
    }
};

const getSkillTestResults = async (req, res) => {
    try {
        const data = await SkillTestResult.find({}).sort({ score: -1 });
        console.log(data);
        res.status(200).json({
            msg: data
        });
    } catch (err) {
        res.status(500).json({
            msg: 'Error in the network'
        });
    }
};

export { postSkillTestResult, getSkillTestResults };
