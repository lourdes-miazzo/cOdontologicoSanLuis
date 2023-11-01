import EmailManager from "../../domain/managers/EmailManager.js";

export const contactMail= async (req,res, next)=>{
    try{
        
        const emailContent= req.body
        const emailString = JSON.stringify(emailContent, null, 2)

        const emailManager = new EmailManager();
        await emailManager.emailContact(emailString);
        res.status(200).send({message: "Mail send", payload: emailContent})
    }
    catch(e){
        next(e)
    }

}