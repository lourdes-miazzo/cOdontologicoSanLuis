
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './nosotros.css';

const Nosotros = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [more, setMore] = useState(false);

  const readMore = () => {
    setMore(!more);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

    handleResize();
  }, []);

  return (
    <>
      <div className={more ? 'backColor6UsMore' : 'backColor6'}>
        <div className='aroundUs'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/ecommerceart-fb0d5.appspot.com/o/1%20(1).webp?alt=media&token=d374d14e-2c95-476d-8376-6f6df4f8b87f'
            alt=''
            className='imgUs'
          />
          <h3 className='titleUs'>CÍRCULO ODONTOLÓGICO DE SAN LUIS</h3>
        {
            isMobile
            ? 
            (
                more
                ?
                (<div >
                    <p className="textUs">
                        <span className="textUs">
                        El Círculo Odontológico de San Luis es una organización cuya fundación corresponde al año 1965 y que tiene como objetivo representar y defender los valores éticos y profesionales de los miembros que la conforman.
                        </span>
                        <br />
                        <span className="textUs">
                        El objetivo principal del COSL es nuclear a los Odontólogos de San Luis, tanto del ámbito privado como de la Salud Pública de la Provincia, con fines administrativos, sociales y académicos. Además, tiene funciones y acciones sociales,  preventivas y de formación académica profesional desarrolladas a través de sus áreas correspondientes. 
                        </span>
                        <br />
                        <span className="textUs">
                        El Círculo Odontológico se destaca como un centro de referencia en la región de Cuyo en formación académica profesional a través de su Escuela de Posgrado y de SOOFMA (Sociedad de Ortodoncia y Ortopedia Funcional de los Maxilares).
                        </span>
                        <br />
                        <span className="textUs">
                        Dentro del Área Preventiva presenta un fuerte compromiso con la prevención de la Salud Bucal y Educación Escolar así como también de la Prevención y Diagnóstico Precoz del  Cáncer Bucal siendo  un centro  de referencia en esta área.
                        </span>
                        <br />
                        <span className="textUs">
                        Destacamos que dentro de las funciones del COSL están las de gestionar y administrar distintos convenios de Obras Sociales y Sistemas prepagos de salud.
                        Por otra parte, cuenta con una Proveeduría de Insumos y Materiales Odontológicos  de primer nivel para nuestros asociados, lo que facilita el actuar profesional. 
                        </span>
                    </p>
                    <div className="linkContainer">
                        <Link onClick={readMore} className="moreLess">MENOS</Link>
                    </div>
                </div>)
                :
                (
                <div>
                    <p id='parragraphUs'>
                        <span className="textUs">
                            El Círculo Odontológico de San Luis es una organización cuya fundación corresponde al año 1965 y que tiene como objetivo representar y defender los valores éticos y profesionales de los miembros que la conforman.
                        </span>
                        <br />
                        <span className="textUs">
                            El objetivo principal del COSL es nuclear a los Odontólogos de San Luis, tanto del ámbito privado como de la Salud Pública de la Provincia, con fines administrativos, sociales y académicos.
                        </span>
                        
                    </p>
                    <div className="linkContainer">
                        <Link onClick={readMore} className="moreLess">LEER MÁS</Link>
                    </div>
                </div>
                )
            )
            :
            (<div>
                <p id='parragraphUs'>
                <span className="textUs">
                    El Círculo Odontológico de San Luis es una organización cuya fundación corresponde al año 1965 y que tiene como objetivo representar y defender los valores éticos y profesionales de los miembros que la conforman.
                </span>
                <br></br>
                <span className="textUs">
                    El objetivo principal del COSL es nuclear a los Odontólogos de San Luis, tanto del ámbito privado como de la Salud Pública de la Provincia, con fines administrativos, sociales y académicos. Además, tiene funciones y acciones sociales,  preventivas y de formación académica profesional desarrolladas a través de sus áreas correspondientes. 
                    </span>
                    <br></br>
                <span className="textUs">
                    El Círculo Odontológico se destaca como un centro de referencia en la región de Cuyo en formación académica profesional a través de su Escuela de Posgrado y de SOOFMA (Sociedad de Ortodoncia y Ortopedia Funcional de los Maxilares).
                    </span>
                    <br></br>
                <span className="textUs">
                    Dentro del Área Preventiva presenta un fuerte compromiso con la prevención de la Salud Bucal y Educación Escolar así como también de la Prevención y Diagnóstico Precoz del  Cáncer Bucal siendo  un centro  de referencia en esta área.
                    </span>
                    <br></br>
                <span className="textUs">
                    Destacamos que dentro de las funciones del COSL están las de gestionar y administrar distintos convenios de Obras Sociales y Sistemas prepagos de salud.
                    Por otra parte, cuenta con una Proveeduría de Insumos y Materiales Odontológicos  de primer nivel para nuestros asociados, lo que facilita el actuar profesional. 
                </span>
                </p>
            </div>)
        }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;