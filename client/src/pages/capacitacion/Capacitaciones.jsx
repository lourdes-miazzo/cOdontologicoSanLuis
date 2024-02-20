import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import "./capacitaciones.css"
import React from "react"
import { useState, useEffect } from "react"
import logoI from "/images/logoI.png"
import logoW from "/images/logoW.png"
import logoF from "/images/logoF.png"


const Capacitaciones= ()=>{
    const [litleImgStudies, setLitleImgStudies]= useState(window.innerWidth <= 1023)
    useEffect(() => {
        const handleResize = () => {
            setLitleImgStudies(window.innerWidth <= 1023);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    
        handleResize();
      }, []);
    
    return(
        <>
            <div className={litleImgStudies? "backStudies": "backStudiesBig"}>
                <span className="titleStudies">CAPACITACIONES</span>
                <div className="aroundStudies">
                    <div className="areaLink"><Link className="linkStudies" to="/api/capacitaciones/posgrado" style={{textDecoration:"none", color: "inherit"}}>ESCUELA DE POSGRADO</Link></div>
                    <div className="areaLink"><Link className="linkStudies" to="/api/capacitaciones/soofma" style={{textDecoration:"none", color: "inherit"}}>SOOFMA</Link></div>
                    <div className="areaLink"><Link className="linkStudies" to="/api/capacitaciones/cursos" style={{textDecoration:"none", color: "inherit"}}>CURSOS</Link></div>
                </div>
                <div className="logosStudies">
                        <Link to="" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoF} className="logoIndStudies"/></Link>
                        <Link to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoW} className="logoIndStudies"/></Link>
                        <Link to="https://www.instagram.com/circulo.odontologicodesanluis?utm_source=qr" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoI} className="logoIndStudies"/></Link>
                    </div>
            </div>
            <Footer/>
        </>
    )
}

export default Capacitaciones