import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoC from "/images/logoCosl.png";
import logoF from "/images/logoF.png";
import logoI from "/images/logoI.png";
import logoW from "/images/logoW.png";
import "./navBar.css";

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light navBarOrg ${isNavOpen ? 'open' : ''}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" onClick={handleNavToggle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/" onClick={closeNav}><img src={logoC} alt="" className='logoC'/></Link>
                    <div className={`linkAreaNav ${isNavOpen ? 'open' : ''}`}>
                        <Link to="" target='_blank' style={{textDecoration:"none", color: "inherit"}} onClick={closeNav}> <img src={logoF} className='logoNavInd'/> </Link>
                        <Link to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}} onClick={closeNav}> <img src={logoW} className='logoNavInd'/> </Link>
                        <Link to="https://www.instagram.com/circulo.odontologicodesanluis?utm_source=qr" target='_blank' style={{textDecoration:"none", color: "inherit"}} onClick={closeNav}> <img src={logoI}className='logoNavInd'/> </Link>
                    </div>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link hvr-fade" aria-current="page" to="/api/nosotros" onClick={closeNav}>NOSOTROS</Link>
                            <Link className="nav-link hvr-fade" to="/api/comision" onClick={closeNav}>COMISIÓN DIRECTIVA</Link>
                            <Link className="nav-link hvr-fade" to="/api/proveeduria" onClick={closeNav}>PROOVEDURÍA</Link>
                            <Link className="nav-link hvr-fade" to="/api/capacitaciones" onClick={closeNav}>CAPACITACIONES</Link>
                            <Link className="nav-link hvr-fade" to="/api/autogestion" onClick={closeNav}>AUTOGESTIÓN</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;