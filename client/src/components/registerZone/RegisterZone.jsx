import "./registerZone.css"
import React from 'react'
import { useAuth } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import {DropdownButton, Dropdown} from "react-bootstrap"

const RegisterZone = () => {
    const {user, isAuthenticated, logout}= useAuth()

    const logoutSession =async ()=>{
        await logout()
    } 

    return (
        <div className="marginReg">
            {
                isAuthenticated 
                ? 
                (
                <div >
                    <DropdownButton title={<p className="buttonUserP">{user.userName}</p>} id="buttonUser">
                        <Dropdown.Item  onClick={logoutSession} className="buttonP"><p>Cerrar Sesión</p></Dropdown.Item>
                    </DropdownButton>
                </div>
                )
                :  
                ( 
                <div className="right">
                    <button className="buttonRegister"><Link to="/api/register/registro" className="noDeco1"><p className="regP">Registro</p></Link></button>
                    <button className="buttonRegister"><Link to="/api/register/login" className="noDeco1"><p className="regP">Login</p></Link></button>
                </div>
                )
        }
        </div>
    )
}

export default RegisterZone