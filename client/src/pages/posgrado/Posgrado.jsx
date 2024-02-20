import React from 'react'
import "./posgrado.css"
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from "react"
import logoI from "/images/logoI.png"
import logoW from "/images/logoW.png"
import logoF from "/images/logoF.png"
import { Link } from 'react-router-dom'


const Posgrado = () => {
 
    const [litleImgPos, setLitleImgPos]= useState(window.innerWidth <= 1023)
    useEffect(() => {
        const handleResize = () => {
          setLitleImgPos(window.innerWidth <= 1023);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    
        handleResize();
      }, []);
    
    return(
        <>
            <div className={litleImgPos? "backPos": "backPosBig"}>
                <span className="titlePos">ESCUELA DE POSGRADO</span>
                <div className="aroundPos">
                <span className="textPos">
                La Escuela de Posgrado (EP) es un área del Círculo Odontológico de San Luis cuya función principal es programar y desarrollar la actualización científica y académica para el mejoramiento profesional. Esta actividad se lleva a cabo a través de cursos teórico-prácticos, con o sin atención de pacientes, conferencias, workshops, así como también en la organización de congresos de la institución.
                </span>
                </div>
                <div className="logosPos">
                        <Link to="" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoF} className="logoIndPos"/></Link>
                        <Link to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoW} className="logoIndPos"/></Link>
                        <Link to="https://www.instagram.com/circulo.odontologicodesanluis?utm_source=qr" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoI} className="logoIndPos"/></Link>
                    </div>
            </div>
            <Footer/>
        </>
  )
}

export default Posgrado