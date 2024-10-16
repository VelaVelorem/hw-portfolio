import './Header.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <section className="aboutmeContainer container">
            <div className="row">
                
                <header className="col col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div>
                        <div className="headerContent">
                            <h1>Haneefah</h1>
                            <h2 className="subheader">Witherspoon</h2>
                            <h3 className="subheaderDescription">Frontend Developer</h3>

                            <div className="socialMediaContainer d-flex justify-content-start">
                                <a href="https://github.com/VelaVelorem"><FontAwesomeIcon icon={faGithub} className="socialMediaIcon me-4" /></a>
                                <a href="https://www.linkedin.com/in/haneefah-witherspoon/"><FontAwesomeIcon icon={faLinkedin} className="socialMediaIcon" /></a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="blurbContainer col col-xs-12 col-sm-12 col-md-6 col-lg-6 ps-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </div>
        </section>
        </>
    )
}

export default Header;