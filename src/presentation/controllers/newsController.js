import NewsManager from "../../domain/managers/NewsManager.js"

export const getAllNews= async(req, res, next)=>{
    try{
        const manager= new NewsManager()
        const getNews=await manager.getAllNews()
        res.status(200).send({message: "All news recibed", payload: getNews})
    }
    catch(e){
        next(e)
    }
}

export const getOneNews= async(req, res, next)=>{
    try{
    const id= req.params.id
    const manager= new NewsManager()
    const getDetail= await manager.getOneNews(id)
    res.status(200).send({message: "News ok", payload: getDetail})
    }
    catch(e){
        next(e)
    }
}

export const createNews= async(req,res,next)=>{
    try{
        const body= req.body
        const manager= new NewsManager()
        const newNews= await manager.newNews(body)
        res.status(201).send({message: "New news created", payload: newNews})
    }
    catch(e){
        next(e)
    }
}
