import RegisterManager from "../../domain/managers/registerManager.js"



export const signup = async(req, res,next)=>{
    try{
        const {userName, email, password, password2 } = req.body
        const manager = new RegisterManager()
        const emailExist = await manager.findByEmail(email)
        if(emailExist){
            return res.status(404).send({message: "Este email ya tiene una cuenta asociada a nuestro servicio"})
        }
        if(password !== password2){
            return res.status(404).send({message: "Las contraseñas no coinciden"})
        }
        const newUser= await manager.createUser(userName, email, password )
        const userToken= await manager.makeToken(newUser)
        res.cookie("token", userToken).status(201).send({message: "New user created", payload: newUser})
    }
    catch(e){
        next(e)
    }
  
}

export const login = async(req, res,next)=>{
    try{
        const {email, password}= req.body
        const manager = new RegisterManager()
        const stored = await manager.findByEmail(email)

        if(!stored){
            return res.status(400).send({message: "Usuario no encontrado"})
        }
        
        const storedPassword = stored.password 
    
        const userLogin= await manager.comparePassword(password, storedPassword)
        if (!userLogin){
            return res.status(400).send({message: "Contraseña incorrecta"})
        }
        const accessToken= await manager.makeToken(stored)
        res.cookie('accessToken', accessToken, {
            maxAge: 60 * 60 * 100,
            httpOnly: true
        }).status(200).send({ message: 'Login success!', accessToken, userName: stored.userName }); 
    
    }
    catch(e){
        next(e)
    }
}

export const logout = async(req, res,next)=>{
    try{
        res.cookie("token", "", {expires: new Date(0)})
        return res.status(200).send({message: "logout ok"})
    }
    catch(e){
        next(e)
    }
}

export const current= async(req,res,next)=>{
    try{
        res.status(200).send({user: req.user})
    }
    catch(e){
        next(e)
    }
}
