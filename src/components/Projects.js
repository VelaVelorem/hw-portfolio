import './Projects.css'

const Projects = () => {
    return (
        <>
            <section className="contentSection">
                <div className="container">
                    <div className="row">
                        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 fadeUpLast">

                            <h4>Education</h4>
                            <div className="educationBox mb-3 px-3 pt-2 pb-2">
                                <h5>PMI | Project Management Bootcamp</h5>
                                <span className="educationSubheader">Arlington, Falls Church VA | October 2024</span>
                                <ul className="experienceList mt-4">

                                    <li className="experienceItem">
                                        Gained a thorough understanding of project lifecycle management, collaborated with alumni teams to deliver successful planning and execution of mock projects.
                                    </li>
                                    <li className="experienceItem">
                                        Collaborated with teams to strategize project management techniques, enhancing my ability to work effectively in group settings.
                                    </li>
                                </ul></div>

                            <div className="educationBox mb-3 px-3 pt-2 pb-2">
                                <h5>Nucamp Coding Bootcamp | Web Development  Fundamentals, Front End & Mobile Development</h5>
                                <span className="educationSubheader">June 2024-Sept 2024</span>

                                <ul className="experienceList mt-4">

                                    <li className="experienceItem">
                                        Utilized Bootstrap for responsive design, allowing me to create visually appealing layouts that adapt seamlessly across different devices.
                                    </li>
                                    <li className="experienceItem">
                                        Built dynamic web applications using React, JavaScript, and Redux, demonstrating my ability to create responsive user interfaces and manage application state effectively.
                                    </li>
                                    <li className="experienceItem">
                                        Gained hands-on experience in HTML, CSS, and JavaScript, developing responsive and interactive web applications.
                                    </li>
                                </ul></div>

                            <div className="educationBox mb-3 px-3 pt-2 pb-2">
                                <h5>CSMD College of Southern Maryland  —
                                    Introduction to CSS3 & HTML5
                                </h5>
                                <span className="educationSubheader">June 2024-Sept 2024</span>
                                <ul className="experienceList mt-4">

                                    <li className="experienceItem">
                                        Studied the fundamentals of HTML5 and CSS3, applying semantic markup techniques to produce clean and accessible code that adheres to web standards.
                                    </li>
                                    <li className="experienceItem">
                                        Practiced styling techniques to enhance website aesthetics and usability, focusing on best practices for creating visually engaging user experiences.
                                    </li>
                                </ul></div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 fadeUp ps-5">

                            <h4>Skills</h4>
                            
                            <ul className="skillContainer d-flex justify-content-start flex-wrap">
                                <li><button className="skillsBtn me-2 mt-2" disabled>React</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>HTML</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>CSS</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>Javascript</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>Bootstrap</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>Firebase</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>Redux</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>Git</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>Github</button></li>
                            </ul>

                            <h4 className="mt-4">Currently Studying</h4>

                            <ul className="skillContainer d-flex justify-content-start flex-wrap">
                                <li><button className="skillsBtn me-2 mt-2" disabled>Next.js</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>Tailwind</button></li>
                                <li><button className="skillsBtn me-2 mt-2" disabled>TypeScript</button></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Projects;