import { newsModel } from "../models/newsModel.js"

class newsMongooseDao{
    async getAllNews(){
        const document = await newsModel.find().sort({date: -1})
        return document
    }
    async getOneNews(id){
        const document = await newsModel.findById(id)
        return document
    }
    async newNews(body){
        const document= await newsModel.create(body)
        return document
    }
    async getTwo(){
        const document= await newsModel.find().sort({date: -1}).limit(2)
        return document
    }
}

export default newsMongooseDao