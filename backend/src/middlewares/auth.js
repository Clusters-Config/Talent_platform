import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) => {
    //Get the token as headers.authorization
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ msg: 'No token provided' });
    }
    const words = token.split(' ');
    console.log(words)
    const jwtToken = words[2]; 
    console.log(jwtToken)
    //Verify the token
    const codeWord = jwt.verify(jwtToken,process.env.JWT_SECRET);

    if(codeWord.username){ 
        req.username = codeWord.username;
        next()
    }
    else{ 
        res.json({
             msg: 'You are not authenticated'
        })
    }
}

export{  authMiddleware };
