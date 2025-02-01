import { Register, Skill } from '../exports.js'
import jwt from 'jsonwebtoken'
import { Loginlist,Joblist } from '../types.js'


const SignIn = async (req, res) => { 
    try{ 
        const {username,password} = req.body;
        console.log({username,password})
        const user = await Register.findOne({ username: username });
        const parseUser = Loginlist.safeParse(user);
        
         console.log(parseUser)

        if(!parseUser.success){ 
          res.json({
            message:"User not found",
            navigate:false
        });
        return;
        }

        const token = jwt.sign({username},process.env.JWT_SECRET);
        console.log(token)

        res.status(200).json({
            message:"User Signed In",
            token:token,
            username:username,
            granted:true
        })

    }
    catch(error){ 
        res.status(500).json({error:"An error occurred while signing in the user"})
    }
}

const SignUp = async (req, res) => {
    try {
        const { firstname, lastname, username, password } = req.body;
        
        const newUser = new Register({
            firstname,
            lastname,
            username,
            password, 
        });
        
        const token = jwt.sign({ username }, process.env.JWT_SECRET);
        console.log(token)
        await newUser.save();

        res.status(201).json({ 
            message: "User Registered", 
            token:token 
        });
    } catch (error) {
        res.status(500).json({ error: "An error occurred while registering the user" });
    }
};


const JobsPost = async (req,res) => { 
    try{
    const {title,content,name,position} = req.body;

    const newJob =  new Skill({ 
        title,
        content,
        name,
        position
    })
    console.log(newJob)
    
    const parseJob = Joblist.safeParse(newJob);
    console.log(parseJob)
    if(!parseJob.success){ 
        res.json({ 
            msg:'Job cannot be posted in the database'
        })
        return 
    }

    await newJob.save()
    res.status(200).json({ 
        msg:'Job posted in the db'
    })
}
catch(err){ 
    res.status(500).json({ 
        msg:'Error in the save'
    })
}

}

const JobsGet = async (req,res) => { 
    try{
   const data = await Skill.find({})
   console.log(data) 
   res.status(200).json({ 
     msg:data
   })
}
catch(err) { 
    res.status(500).json({ 
        msg:"Error in the search"
    })
}
}


const SignOut = async (req,res) =>{ 
    try { 
        res.json({ 
            msg:"User Signed Out",
            granted:false
        })
    }
    catch(err){ 
        res.json({ 
            msg:"User cannot be signed out"
        })
    }
}

export{ 
    SignIn,
    SignUp,
    JobsPost,
    JobsGet,
    SignOut
}