import { Link } from "react-router-dom"
import './MainNavbar.css'
import  hiwLogo  from '../imgs/greytextlightbg.png'

const MainNavbar = () => {
    return (
        <nav className="d-flex align-items-center justify-content-center">

            <ul className="d-flex justify-content-center align-items-center pt-3 flex-wrap">
                <Link to="/"><li className="navItem me-5 pb-1">About me</li></Link>
                <Link to="/ProjectPage"><li className="navItem me-5 pb-1">Projects</li></Link>
                <Link to="/Contact"><li className="navItem me-5 pb-1">Contact</li></Link>
                <a href="https://docs.google.com/document/d/17S3ePRG_ydCPiLWxx_U2EXKj_wJglm50/edit?usp=sharing&ouid=103657502997736782431&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer"><li className="navItem me-5 pb-1">Resume</li></a>
            </ul>
        </nav>
    )
}

export default MainNavbar