import './Header.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <section className="aboutmeContainer container">
            <div className="row">
                
                <header className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 fadeRight">
                    <div>
                        <div className="headerContent">
                            <h1>Haneefah</h1>
                            <h2 className="subheader">Witherspoon</h2>
                            <h3 className="subheaderDescription">Frontend Developer</h3>

                            <ul className="socialMediaContainer d-flex justify-content-start flex-wrap mt-3">
                                <li><button className="softSkillsBtn me-2" disabled>Adaptablity</button></li>
                                <li><button className="softSkillsBtn me-2" disabled>Organization</button></li>
                                <li><button className="softSkillsBtn me-2" disabled>Enthusiasm for learning</button></li>
                                <li><button className="softSkillsBtn me-2" disabled>Self Motivated</button></li>
                                <li><button className="softSkillsBtn me-2" disabled>Analytical</button></li>
                            </ul>
                        </div>
                    </div>
                </header>

                <section className="blurbContainer col col-xs-12 col-sm-12 col-md-6 col-lg-6 fadeRightSecond">
                    <h2 className="aboutMeHeader mb-4">Hey there,</h2>
                    <p className="aboutMeSummary">I’m a front-end web developer from Southern Maryland, with a background as a doctor's assistant in dentistry. My journey into coding began as a personal interest; after discovering my passion, I pursued self-study, attended a web development bootcamp, and took college courses related to the field. I’ve gained a deep appreciation for both design and functionality and look forward to enhancing my skills in this dynamic industry.</p>
                </section>
            </div>
        </section>
        </>
    )
}

export default Header;