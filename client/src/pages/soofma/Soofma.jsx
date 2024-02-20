import React from 'react'
import "./soofma.css"
import { useState, useEffect } from "react"
import logoS from "/images/logoSoofma.png"
import Footer from '../../components/footer/Footer'

const Soofma = () => {

  const [litleImgSoo, setLitleImgSoo]= useState(window.innerWidth <= 1023)
  useEffect(() => {
      const handleResize = () => {
        setLitleImgSoo(window.innerWidth <= 1023);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  
      handleResize();
    }, []);
  
  return(
      <>
          <div className={litleImgSoo? "backSoo": "backSooBig"}>
              <span className="titleSoo">SOOFMA</span>
              <div className="orgSoo">
                <div className="logoSoo">
                      <img src={logoS} alt="" className='logoSoofma'/>
                </div>
                <div className="aroundSoo">
                  <span className="textSoo">
                    <p className="indTextSoo">
                      La Seccional de Ortodoncia y Ortopedia Funcional de los Maxilares (SOOFMA) del Círculo Odontológico de San
                      Luis, constituye una rama de la Sociedad Argentina de Ortodoncia (SAO), fundada el 12 de junio de 1933. 
                      La SAO es una institución sin fines de lucro, declarada Entidad de Bien Público, que nuclea a odontólogos 
                      en formación y especializados en Ortodoncia en calidad de socios. 
                    </p>
                    <p className="indTextSoo">
                      La SAO se encuentra inscripta en el registro público de Centros de Investigación e Instituciones de 
                      Formación Profesional Superior por resolución del Ministerio de Educación.
                    </p>
                    <p className="indTextSoo">  
                      Las principales funciones de SOOFMA son: la formación y especialización académica, la función social y asesoramiento en 
                      orientación de aranceles y respaldo frente a obras sociales y prepagas a través de la Institución.
                      Al asociarse a SOOFMA podrá acceder a los siguientes beneficios:
                    </p>
                    <p className="indTextSoo">
                      -Formación académica de posgrado en ortodoncia y ortopedia maxilar, permitiendo a los profesionales 
                      iniciarse en la especialidad, mantenerse actualizado y/o aumentar su conocimiento y capacitación  a través 
                      de diversos cursos los cuales podrán estar avalados por la SAO.
                    </p>
                    <p className="indTextSoo">
                      -Descuentos y beneficios  especiales para socios de SOOFMA en cursos y congresos que sean organizados por 
                      SOOFMA y SAO bajo convenios interinstitucionales.
                    </p>
                    <p className="indTextSoo">
                      -Acceso a la revista de ortodoncia y biblioteca virtual de la SAO de distribución semestral, la cual cuenta con artículos 
                      científicos de la especialidad y una reseña de las actividades que realiza dicha Institución.
                    </p>
                  </span>
                </div>
                
              </div>
          </div>
          <Footer/>
      </>
)

}

export default Soofma