import { Profile } from "../exports.js";


const createprofile = async (req, res) => { 
    try { 
        const {description,skills,level,experience,education} = req.body
        const profile = new Profile(req.body);
        await profile.save();
        res.status(200).json({message: "Profile created successfully"}); 
    }
    catch(error){ 
        res.json({message: error.message})
    }
}

const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).send(profiles);
    }
    catch(error){
        res.json({message: error.message})
    }
}

const getProfile = async (req, res) => {
    try {
        const profile = await Profile.find({ 
            name: req.params.name
        });
        res.status(200).json({
            msg: "Profile found successfully",
            profile
        });
    }
    catch(error){
        res.json({message: error.message})
    }
}

const updateProfile = async (req, res) => {
    try {
        const { description, skills, level, experience, education } = req.body;
        const profile = await Profile.findOneAndUpdate(
            { name: req.params.name },
            req.body,
            { new: true }
        );
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json({ message: "Profile updated successfully", profile });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createprofile, getProfiles, getProfile, updateProfile }
