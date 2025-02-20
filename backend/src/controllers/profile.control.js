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

export { createprofile, getProfiles, getProfile }