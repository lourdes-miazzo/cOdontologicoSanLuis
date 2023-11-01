import "./register.css"
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, respErrors: registerErrors, registerSuccess } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/api/cursos");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className={`backColor8 ${errors ? 'hasErrors' : ''}`}>
      <div className="backOrg8">
        {  
          registerSuccess 
          ? 
          (<div className="respuesta">¡Registro exitoso! Te has registrado correctamente.</div>) 
          : 
          (
            <>
              {registerErrors && <div className="regDBErrors">{registerErrors}</div>}
              <form className={`formOrg8 ${errors ? 'hasErrors' : ''}`} onSubmit={onSubmit}>
                <label htmlFor="userName">Ingresa tu nombre de usuario</label>
                <input type="text" {...register("userName", { required: true })} name="userName" id="userName" autoComplete=""/>
                {errors.userName && <p className="regErrors">El nombre de Usuario es obligatorio</p>}
                <label htmlFor="email">Ingresa tu mail</label>
                <input type="text" {...register("email", { required: true })} name="email" id="email"/>
                {errors.email && <p className="regErrors">El email es obligatorio</p>}
                <label htmlFor="password">Ingresa una contraseña</label>
                <input type="password" {...register("password", { required: true })} name="password" id="password"/>
                {errors.password && <p className="regErrors">La contraseña es obligatoria</p>}
                <label htmlFor="password2">Repite la contraseña</label>
                <input type="password" {...register("password2", { required: true })} name="password2" id="password2"/>
                {errors.password2 && <p className="regErrors">Debes volver a ingresar tu contraseña</p>}
                <button type="submit" className="button8">Registrarme</button>
              </form>
            </>
          )
        }
      </div>
    </div>
  );
}

export default Register;