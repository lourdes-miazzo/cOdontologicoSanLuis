import "./login.css"
import { useAuth } from '../../context/AuthContext.jsx'
import Footer from "../../components/footer/Footer.jsx"
import {useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'; 
import Swal from "sweetalert2"
import ReCAPTCHA from "react-google-recaptcha";

import { useRef } from "react";

const Login = () => {
  const captcha= useRef(null)
  const { login, loginErrors, loginSuccess } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = handleSubmit(async (values) => {
      await login(values)
      reset()
  });

  const handleLoginSuccess = () => {
      Swal.fire({
          icon: 'success',
          title: 'Login exitoso!',
          showConfirmButton: true,
      });
      navigate("/"); 
  };
  const onChange=()=>{
    if(captcha.current.getValue()){
      console.log("el usuario no es un bot")
    }
  }
  return (
    <>
      <div className={`backColor5 ${errors ? 'hasErrors' : ''}`}>
        <div className="backOrg5">
          {
            loginSuccess
            ?
            (handleLoginSuccess())
            :
            (<>
              {loginErrors && <div className="errorsDB">{loginErrors}</div>}
              <form onSubmit={onSubmit} className={`formOrg5 ${errors ? 'hasErrors' : ''}`}>
                  <label htmlFor="email">Ingresa tu mail</label>
                  <input type="email" {...register("email", { required: true })} name="email" id="email" />
                  {errors.email && <p className="errors">El email es obligatorio</p>}
                  <label htmlFor="password">Ingresa tu contraseña</label>
                  <input type="password" {...register("password", { required: true })} name="password" id="password" />
                  {errors.password && <p className="errors">La contraseña es obligatoria!</p>}
                  <div className="reCaptchaLogin">
                    <ReCAPTCHA
                        ref={captcha}
                        sitekey="6Ld55AcpAAAAAPCrgwOBR7mfjqXGjDfGRRmw36Eg"
                        onChange={onChange}
                    />
                  </div>
                  <button type="submit" className="button5">Login</button>
              </form>
            </>)
          }
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
