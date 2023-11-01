import NewsManager from "../../domain/managers/NewsManager.js"

export const getTwoNews= async(req,res,next)=>{
    try{
        const manager= new NewsManager()
        const twoNews= await manager.getTwo()
        res.status(200).send({message: "two news found",payload: twoNews})
    }
    catch(e){
        next(e)
    }
}