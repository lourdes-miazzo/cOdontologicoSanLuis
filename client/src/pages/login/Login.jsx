import {useForm } from "react-hook-form"
import { useAuth } from '../../context/AuthContext'
import "./login.css"

const Login = () => {
    const {login, isLogin, loginErrors}= useAuth()
    console.log(loginErrors)
    const {register, handleSubmit, formState: { errors } }= useForm() 

    const onSubmit= handleSubmit(async (values)=>{
      await login(values)
    })
  return (
    <div className={`backColor5 ${errors ? 'hasErrors' : ''}`}>
      <div className="backOrg5">
        {
          isLogin
          ?
          (<div className="respuesta">Login exitoso</div>)
          :
          ( 
            <>
            {loginErrors && <div className="errors">{loginErrors}</div>}
            <form onSubmit={onSubmit} className={`formOrg5 ${errors ? 'hasErrors' : ''}`}>
              <label htmlFor="email">Ingresa tu mail</label>
              <input type="text" {...register("email", {required: true})} name="email" id="email"/>
              {errors.email && <p className="errors">El email es obligatorio</p>}
              <label htmlFor="password">Ingresa tu contraseña</label>
              <input type="password" {...register("password", {required: true})} name="password" id="password"/>
              {errors.password && <p className="errors">La contraseña es obligatoria!</p>}
              <button type="submit" className="button5">Login</button>
            </form>
            </>
          )
        }
      </div>
    </div>
)}

export default Login