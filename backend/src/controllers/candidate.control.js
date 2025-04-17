import { Candidate } from "../exports.js";


const createCandidate = async (req, res) =>{ 
    const { name, headline, skills, location, experience, availability, summary, imageUrl } = req.body;
    try {
        const candidate = new Candidate({
            name,
            headline,
            skills,
            location,
            experience,
            availability,
            summary,
            imageUrl
        });
        await candidate.save();
        res.status(201).json(candidate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllCandidates = async (req, res)=>{ 
    try {
        const candidates = await Candidate.find();
        res.status(200).json(candidates);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export { 
    createCandidate,
    getAllCandidates
}