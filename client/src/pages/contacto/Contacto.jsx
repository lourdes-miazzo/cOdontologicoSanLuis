import "./contacto.css"
import React, { useState }  from "react"
import Footer from "../../components/footer/Footer"
import {contactRequest} from "../../api/auth.js"
import {useForm} from "react-hook-form"
import RegisterZone from "../../components/registerZone/RegisterZone"




const Contacto= ()=>{
    const [contactSent, setContactSend]= useState(false)
    const [contactErrors, setContactErrors]= ("")
    const { register, handleSubmit, formState: errors, reset } = useForm();
    const onSubmit= handleSubmit(async (values)=> {
            try{
                const res= await contactRequest(values)
                setContactSend(true)
                reset()
                setTimeout(() => {
                    setContactSend(false)
                }, 4000);
            }
            catch(e){
                setContactErrors(e.response.data.message)
            }  
        })                       
    return(
        <>
        <div className="backColor">
            <div className="backOrg">
                {
                    contactSent
                    ?
                        (<div className="respuesta">Tu mensaje ha sido enviado correctamente, pronto recibiras una respuesta!</div>)
                    :
                        (
                            <>
                                {contactErrors && <div className="errors">{contactErrors}</div>}
                                <h3 className="titleContact">Contactate con nosotros</h3>
                                <form className="formOrg" onSubmit= {onSubmit}>
                                    <label htmlFor="Nombre yApellido">Ingresa tu nombre y apellido</label>
                                    <input type="text" {...register("Nombre y Apellido", {required: true})} name="Nombre y Apellido" id="Nombre y Apellido"/>
                                    <label htmlFor="email">Ingresa tu email</label>
                                    <input type="email" {...register("email", {required: true})} name="email" id="email"/>
                                    <label htmlFor="Mensaje">Dejanos tu mensaje</label>
                                    <input type="text" {...register("Mensaje", {required: true})} name="Mensaje" id="Mensaje"/>
                                    <button className="my-button" type="submit">Enviar mensaje</button>
                                </form>
                            </>
                        )
                }
                </div>
                <div className="locationRegist">
                    <RegisterZone />
                </div>
        </div>
           <Footer/> 
        </>
    )
}

export default Contacto