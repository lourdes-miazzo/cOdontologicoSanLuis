import "./home.css"
import Footer from "../../components/footer/Footer.jsx"
import Carrousel from "../../components/carrousel/Carrousel.jsx"
import { Link } from "react-router-dom"
import logoI from "/images/logoI.png"
import logoW from "/images/logoW.png"
import logoF from "/images/logoF.png"


const Home = ()=>{

    

    return(
        <>
            <div className="backColor4">
                <div className="centerPiece">
                    <div className="aroundSlide">
                        <Carrousel/>
                    </div>
                    <div className="back-under">
                        <h4 className="name"><Link to="/api/nosotros" style={{textDecoration:"none", color: "inherit"}}>CÍRCULO ODONTOLÓGICO DE SAN LUIS</Link></h4>
                    </div>
                    <div className="logosHome">
                        <Link to="" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoF} className="logoIndHome"/></Link>
                        <Link to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoW} className="logoIndHome"/></Link>
                        <Link to="https://www.instagram.com/cosl.ep/" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoI} className="logoIndHome"/></Link>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default Home