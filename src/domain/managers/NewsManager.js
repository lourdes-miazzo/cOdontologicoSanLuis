import newsMongooseDao from "../../data/dao/newsMongooseDao.js"

class NewsManager{
    constructor(){
        this.dao = new newsMongooseDao()
    }
    async getAllNews(){
    return this.dao.getAllNews()
    }
    async getOneNews(id){
        return this.dao.getOneNews(id)
    }
    async newNews(body){
        return this.dao.newNews(body)
    }
    async getTwo(){
        return this.dao.getTwo()
    }
}

export default NewsManager