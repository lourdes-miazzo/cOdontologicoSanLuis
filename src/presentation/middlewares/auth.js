import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const auth=(req,res,next)=>{
    const authHeader=req.headers.authorization

    if(!authHeader){
        return res.status(401).send({ message: 'Authorization header empty' });
    } 
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, (error, credentials) =>
    {
        if (error)
        {
            return res.status(403).send({ message: 'Authentication error' });
        }
        req.user = credentials.user;
        next(); 
    }); 

}