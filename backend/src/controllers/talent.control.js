import { Talent } from "../exports.js";
import { Talentlist } from "../types.js";


const postTalent = async (req,res) =>{
    try { 
    const {name,label,role,level,avail,location} = req.body;

    const newTalent = new Talent({ 
        name,
        label,
        role,
        level,
        avail,
        location
    })

    const parsetalent = Talentlist.safeParse(newTalent);

    if(!parsetalent.success){ 
        res.status(400).json({ 
            msg:parsetalent.error
        })
        return;
    }
   
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