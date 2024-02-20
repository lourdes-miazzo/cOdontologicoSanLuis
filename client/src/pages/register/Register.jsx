import "./register.css"
import { useAuth } from '../../context/AuthContext.jsx';
import Footer from "../../components/footer/Footer.jsx"
import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2"

const Register = () => {
  const captcha = useRef(null)
  const { register, handleSubmit, formState: { errors }, reset} = useForm();
  const { signup, registerErrors, registerSuccess} = useAuth();

  
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
    reset()
  });

  const handleRegisterSuccess= ()=>{
    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso! Te has registrado correctamente.',
      showConfirmButton: true,
    });  
    navigate("/");
  }

  const onChange=()=>{
    if(captcha.current.getValue()){
      console.log("no es un bot")
    }
  }
  return (
    <>
    <div className={`backColor8 ${errors ? 'hasErrors' : ''}`}>
      <div className="backOrg8">
        {  
          registerSuccess 
          ? 
          (handleRegisterSuccess()) 
          : 
          (
            <>
              {registerErrors && <div className="regDBErrors">{registerErrors}</div>}
              <form className={`formOrg8 ${errors ? 'hasErrors' : ''}`} onSubmit={onSubmit}>
                <label htmlFor="userName">Ingresa tu nombre de usuario</label>
                <input type="text" {...register("userName", { required: true })} name="userName" id="userName" autoComplete=""/>
                {errors.userName && <p className="regErrors">El nombre de Usuario es obligatorio</p>}
                <label htmlFor="email">Ingresa tu mail</label>
                <input type="email" {...register("email", { required: true })} name="email" id="email"/>
                {errors.email && <p className="regErrors">El email es obligatorio</p>}
                <label htmlFor="password">Ingresa una contraseña (mínimo 8 caracteres)</label>
                <input type="password" {...register("password", { required: true })} name="password" id="password" minLength="8"/>
                {errors.password && <p className="regErrors">La contraseña es obligatoria</p>}
                <label htmlFor="password2">Repite la contraseña</label>
                <input type="password" {...register("password2", { required: true })} name="password2" id="password2" minLength="8"/>
                {errors.password2 && <p className="regErrors">Debes volver a ingresar tu contraseña</p>}
                <div className="reCaptchaRegister">
                  <ReCAPTCHA
                      ref={captcha}
                      sitekey="6Ld55AcpAAAAAPCrgwOBR7mfjqXGjDfGRRmw36Eg"
                      onChange={onChange}
                  />
                </div>
                <button type="submit" className="button8">Registrarme</button>
              </form>
            </>
          )
        }
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Register;