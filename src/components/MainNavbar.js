import { Link } from "react-router-dom"
import './MainNavbar.css'
import  hiwLogo  from '../imgs/greytextlightbg.png'

const MainNavbar = () => {
    return (
        <nav className="d-flex align-items-center justify-content-evenly">

            <div className="logoContainer ms-5 justify-content-start">
                <img src={hiwLogo} alt="logo of initials" className="logo" />
            </div>

            <ul className="d-flex justify-content-center align-items-center pt-3 ">
                <li className="navItem me-5 pe-5">About me</li>
                <li className="navItem me-5 pe-5">Project</li>
                <li className="navItem me-5">Contact</li>
            </ul>
        </nav>
    )
}

export default MainNavbar