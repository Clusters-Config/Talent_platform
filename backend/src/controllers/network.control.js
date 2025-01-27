import { Experience } from "../exports.js";
import { Networklist } from "../types.js";

const postNetwork = async (req,res) =>{ 

    try { 
        const {title,employment} = req.body;

        const newExp = new Experience({
            title,
            employment
        })  

        const parseExp = Networklist.safeParse(newExp);
        
        if(!parseExp.success){ 
            res.json({ 
                msg:'Experience cannot be posted in the database'
            })
            return
        }

        await newExp.save();

        res.status(200).json({ 
            msg:'Experience posted in the db'
        })
    }
    catch(err){ 
        res.status(500).json({ 
            msg:'Error in the network'
        })
    }
}


const getNetwork = async (req,res) => { 
    try{
        const data = await Experience.find({})
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

export { postNetwork, getNetwork }