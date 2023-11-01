import { UserModel } from "../models/userModel.js"

class registerMongooseDao{
    async createUser(dto){
        const document= await UserModel.create(dto)
        const simplified= {
            id: document._id,
            userName: document.userName,
            email: document.email,
            created: document.createdAt,
            updated: document.updatedAt
        }
        return simplified
    }
    async findByEmail(email){
        const document= await UserModel.findOne({email: email})
        console.log(document)
        return document
    }
}

export default registerMongooseDao