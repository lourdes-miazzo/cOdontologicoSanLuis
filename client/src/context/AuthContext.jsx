import { createContext, useContext, useState, useEffect } from "react";
import { registerRequest, loginRequest, logoutRequest, getInfoUser } from "../api/auth";


export const AuthContext = createContext()

export const useAuth= ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be use within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState("")
    const [isAuthenticated, setIsAuthenticated]= useState(false)
    const [token, setToken]= useState("")
    const [registerErrors, setRegisterErrors]= useState("")
    const [registerSuccess, setRegisterSuccess]= useState(false)
    const [loginErrors, setLoginErrors]= useState("")
    const [loginSuccess, setLoginSuccess]= useState(false)
   

    const signup = async (values)=>{
        try{
            const res= await registerRequest(values)
            const info= res.data.payload
            setUser(info)
            setRegisterSuccess(true)
            setIsAuthenticated(true)
            localStorage.setItem("authToken", res.data.accessToken)
        }
        catch(e){
            setRegisterErrors(e.response.data.message);
            setTimeout(() => {
                setRegisterErrors("") 
            }, 5000);
        }
    }
    useEffect(() => {
        console.log(user.userName);
    }, [user])
    
    const login= async(values)=>{
        try{
            const res= await loginRequest(values)
            const info= (res.data)
            setUser(info)
            setToken(res.data.accessToken)
            setIsAuthenticated(true)
            setLoginSuccess(true)
            localStorage.setItem("authToken", res.data.accessToken)
        }
        catch(e){
            setLoginErrors(e.response.data.message)
            setTimeout(() => {
                setLoginErrors("") 
            }, 5000);
        }
    }
    useEffect(() => {
        console.log(user.userName);
    }, [user])

    
    const logout= async()=>{
        try{
            const res= await logoutRequest()
            setIsAuthenticated(false)
            setRegisterSuccess(false)
            setLoginSuccess(false)
            localStorage.removeItem("authToken")
        }
        catch(e){

        }
    }

    useEffect(()=>{
        const getTokenAndinfo= async()=>{
            try{
                const storedToken= localStorage.getItem("authToken")
                if(storedToken){
                    const userInfo= await getInfoUser(storedToken)
                    const userData= userInfo.payload.user
                    setToken(storedToken)
                    setIsAuthenticated(true)
                    setUser(userData) 
                }
            }
            catch(e){
                throw e
            }
          
        }
        getTokenAndinfo()
    }, [])


    return (
        <AuthContext.Provider value={{signup, user, login, loginSuccess, isAuthenticated,registerErrors, registerSuccess, logout, loginErrors, token}}>
            {children}
        </AuthContext.Provider>
    )
}