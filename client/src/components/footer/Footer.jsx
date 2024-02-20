
import React from 'react'
import './footer.css'
import logoBlanco from "/images/logoBlancoCosl.png"


import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='backg'>
   
          <div className='grid-container'>
            <div className='second'>
                <p className='title'>INFORMACIÓN</p>
                <div className='infoText'>
                <p className='textP'>circuloodontologicosanluis@gmail.com</p>
                <p className='textP'>0266 442-6636</p>
                <p className='textP'>Ayacucho 1362</p>
                </div>
            </div>
            <div className='vertical'></div>
            <div className='first'>
                <Link to="/"><img src={logoBlanco} alt="ícono del círculo odontológico de San Luis" className='iconoOdonto'/></Link>
            </div>
             
          </div>
        </div>

    </footer>
  )
}

export default Footer