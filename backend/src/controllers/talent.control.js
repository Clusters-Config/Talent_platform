import { Talent } from "../exports.js";


const postTalent = async (req,res) =>{
    const {name,label,role,level,avail,location} = req.body;

    const newTalent = new Talent({ 
        name,
        label,
        role,
        level,
        avail,
        location
    })

    try { 
        await newTalent.save();
        res.status(200).json({ 
            msg:'Talent posted in the db'
        })
    }
    catch(err){ 
        res.status(500).json({ 
            msg:'Error in the network'
        })
    }
}


const getTalent = async (req,res) => { 
    try{
        const data = await Talent.find({})
        console.log(data)
        res.status(200).json({ 
            msg:data
        })
    }
    catch(err){ 
        res.status(500).json({ 
            msg:'Error in the network'
        })
    }
}

export { postTalent, getTalent }