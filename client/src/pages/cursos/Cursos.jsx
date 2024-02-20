import React from 'react'
import "./cursos.css"
import Footer from '../../components/footer/Footer'
import logoW from "/images/logoW.png"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cursos = () => {
  const [litleImgCour, setLitleImgCour]= useState(window.innerWidth <= 1023)
  useEffect(() => {
      const handleResize = () => {
        setLitleImgCour(window.innerWidth <= 1023);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  
      handleResize();
    }, []);
  
  return(
      <>
          <div className={litleImgCour? "backCour": "backCourBig"}>
              <span className="titleCour">INSCRIPCIONES ABIERTAS 2024</span>
              <div className="orgCour">
                <div className="aroundCour">
                  <span className="textCour">
                    
                    <p className="indTextCour">
                      <span className="pointTextCour">.</span>
                      Curso de ortodoncia- MBT intensivo teórico y consultoría de casos clínicos. A cargo del Dr. Jorge Laraudo
                    </p>
                    
                    <p className="indTextCour">
                      <span className="pointTextCour">.</span>
                      Curso de disfunción cráneo mandibular- ATM teórico- práctico con clínica sobre pacientes. A cargo del Dr. Jorge Laraudo
                    </p>
                    
                    <p className="indTextCour">
                      <span className="pointTextCour">.</span>
                      Ortodoncia MBT teórico práctico con clínica sobre pacientes de nivel inicial y medio. A cargo del Dr. Ricardo Abratte
                    </p>
                    
                    <p className="indTextCour">
                      <span className="pointTextCour">.</span>
                      Actualizaciones de estomatología. A cargo del Dr. Angel Daniel Talavera y colaboradores
                    </p>
                  
                    <p className="indTextCour">
                      <span className="pointTextCour">.</span>
                      Rehabilitación bucal integral en la era digital con prótesis implanto asistida. A cargo de la Dra Rodriguez Alejandro
                    </p>
                    
                    <p className="indTextCour">
                      <span className="pointTextCour">.</span>
                      Endodoncia mecanizada. A cargo Dra. Cecilia Mugnolo
                    </p>

                    <p className="indTextCour">
                    <span className="pointTextCour">.</span>
                      ABC rehabilitación protética. A cargo del Dr. Martin Vega
                    </p>
                    
                    <p className="indTextCour">
                      <span className="pointTextCour">.</span>
                      Diplomatura en odontología restauradora basada en la biomimética. A cargo del Od. Esp. Carlos Platero y Od. Esp. Mauricio Clavero
                    </p>

                  </span>
                </div>
                <div className="logoCourArea">
                      <p className="textWhatCour">INSCRIBITE</p>
                      <Link to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}>
                        <img src={logoW} alt="" className='logoCourWhat'/>
                      </Link>
                </div>
              </div>
          </div>
          <Footer/>
      </>
)
}

export default Cursos