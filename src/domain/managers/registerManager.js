import { hash, decrypt, creatTok } from "../../shared/securityProcess.js"
import registerMongooseDao from "../../data/dao/registerMongooseDao.js"

class RegisterManager{
    constructor(){
        this.dao = new registerMongooseDao()
    }
    async createUser(userName, email, password){
        const hashedPass = await hash(password)
        const dto= {
            userName,
            email,
            password: hashedPass
        }
        return this.dao.createUser(dto)
    }
    async findByEmail(email){
        return this.dao.findByEmail(email)
    }
    async comparePassword(password, storedPassword){
        const compare= await decrypt(password, storedPassword)
        return compare
    }
    async makeToken(newUser){
        const token = creatTok(newUser)
        return token
    }
}

export default RegisterManager