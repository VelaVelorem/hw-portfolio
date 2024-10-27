import { Link } from "react-router-dom"
import './MainNavbar.css'
import  hiwLogo  from '../imgs/greytextlightbg.png'

const MainNavbar = () => {
    return (
        <nav className="d-flex align-items-center justify-content-center">

            <ul className="d-flex justify-content-center align-items-center pt-3 ">
                <Link to="/"><li className="navItem me-5 pb-1">About me</li></Link>
                <Link to="/ProjectPage"><li className="navItem me-5 pb-1">Project</li></Link>
                <Link to="/Contact"><li className="navItem me-5 pb-1">Contact</li></Link>
                <a href=""><li className="navItem me-5 pb-1">Resume</li></a>
            </ul>
        </nav>
    )
}

export default MainNavbar