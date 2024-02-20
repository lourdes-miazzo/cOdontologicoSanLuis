import Footer from "../../components/footer/Footer"
import logoI from "/images/logoI.png"
import logoW from "/images/logoW.png"
import logoF from "/images/logoF.png"
import { Link } from "react-router-dom"
import "./comision.css"
import { useState, useEffect } from "react"

const Comision= ()=>{
    const [litleImg, setLitleImg]= useState(window.innerWidth <= 1023)
    useEffect(() => {
        const handleResize = () => {
            setLitleImg(window.innerWidth <= 1023);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    
        handleResize();
      }, []);
    return(
        <>
            <div className={litleImg ?"backColor1" : "backColorBig1"}>
                <h3 className="titlePeople">
                    COMISIÓN DIRECTIVA
                </h3>
                <div className="aroundPeople">
                    <div className="group3"> Comisión Directiva COSL 2023/2025:</div>
                   
                    <div className="group"><strong>Presidente:</strong> Dr. Daniel Osvaldo Diaz</div>
                    
                    <div className="group"><strong>Vice presidente:</strong> Dr. Gastón Crespo</div>
                    
                    <div className="group"><strong>Tesorería:</strong> Dra. María del Carmen Scala</div>
                    
                    <div className="group"><strong>Secretaría:</strong> Dra. Romina Gondolo</div>
                    
                    <div className="group"><strong>Vocales Titulares:</strong></div>
  
                    <div className="group">
                        <div className="group2">Dra. Laura Rocca</div>
                        <div className="group2">Dra. Yanela Vanesa Enriz</div>
                        <div className="group2">Dr. Franco Martín Vega</div>
                    </div>
                    
                    <div className="group"><strong>Vocales Suplentes:</strong></div>
            
                    <div className="group">
                        <div className="group2">Dr. Hugo Mario Gomez</div>
                        <div className="group2">Dr. Martin Suarez</div>
                        <div className="group2">Dr. Carlos Ruiz</div>
                    </div>
                    
                    <div className="group"><strong>Colaboradores:</strong></div>

                    <div className="group">
                        <div className="group2">Dra. María Eugenia Borra</div>
                        <div className="group2">Dr. Darío Capellino</div>
                        <div className="group2">Dra. Yanina Manso</div>
                        <div className="group2">Dra. Gabriela Vivas</div>
                    </div>
                </div>
                <div className="logosPeople">
                        <Link to="" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoF} className="logoIndPeople"/></Link>
                        <Link to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoW} className="logoIndPeople"/></Link>
                        <Link to="https://www.instagram.com/circulo.odontologicodesanluis?utm_source=qr" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoI} className="logoIndPeople"/></Link>
                    </div>
            </div>
            <Footer/>
        </>
    )
}

export default Comision