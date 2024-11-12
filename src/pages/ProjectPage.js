import './ProjectPage.css'
import  fandangoProj  from '../imgs/fandangoFront.png';
import  portfolioProj  from '../imgs/portfoliofront.png'
import  animeProj from '../imgs/aniScope.png';


const ProjectPage = () => {
    return (
        <>
            <section className="projectSection">
                <div className="container">
                    <div className="row">

                        <h5 className="projectMainHeader">Projects</h5>

                        <div className="individualProjectContainer d-flex align-items-center justify-content-around flex-wrap col-12">

                            <div className="projectImageContainer">
                                <img src={animeProj} alt="Anime Database Project Image" className="projectImg" />
                            </div>

                            <div className="projectInfoContainer">
                                <h5 className="projectHeader mb-4 workInProgress d-flex align-items-center gap-3">Anime Database</h5>
                                    <p>In this project I built an anime database that allows users to search for titles and filter through various genres for the currently airing anime shows. Through integrating an open-source API (Jikan Api) I dynamically display each anime's details. I also stylized the entire app with Tailwind CSS, focusing on a clean, responsive layout that'll maintain a consistent look across devices, I as well emphasized utilizing select React hooks to manage the project's state and data flow across components.</p>

                                <div className="projectButtonsContainer mt-5 d-flex justify-content-center align-items-center">
                                   <a href="https://github.com/VelaVelorem/anime-database.git"><button type="button" className="projectButton">Github</button></a>
                                </div>
                            </div>

                        </div>

                        <div className="individualProjectContainer d-flex align-items-center justify-content-around flex-wrap col-12 mb-5">

                            <div className="projectImageContainer">
                                <img src={fandangoProj} alt="Fandango Project Image" className="projectImg" />
                            </div>

                            <div className="projectInfoContainer">
                                <h5 className="projectHeader mb-4">Fandango Project</h5>
                                <p>For my Fandango-inspired project, I dove into the essential tools of web development—React, HTML, CSS, JavaScript, and Bootstrap—to recreate the UI design of Fandango's ticket selection and seat booking pages. This project challenged me to incorporate dynamic features, allowing users to easily adjust their ticket quantity. Once they’ve selected their desired number of tickets, they’re prompted to log in through a simplistic validation process. After successful authentication they will be navigated to the seat booking page.</p>

                                <div className="projectButtonsContainer mt-5 d-flex justify-content-center align-items-center">
                                    <a href="https://velavelorem.github.io/fandango-project/"><button type="button" className="projectButton me-5">Live Website</button></a>
                                    <a href="https://github.com/VelaVelorem/fandango-project"><button type="button" className="projectButton">Github</button></a>
                                </div>
                            </div>

                        </div>

                        <div className="individualProjectContainer d-flex align-items-center justify-content-around flex-wrap col-12">

                            <div className="projectImageContainer">
                                <img src={portfolioProj} alt="Portfolio Project Image" className="projectImg" />
                            </div>

                            <div className="projectInfoContainer">
                                <h5 className="projectHeader mb-4">Portfolio</h5>
                                    <p>In my portfolio project, I aimed to craft a minimalist and responsive user interface using React, focusing on clean design and straightforward navigation. I believe that a portfolio should not only showcase projects but also reflect the developer’s style and attention to detail. With a keen emphasis on CSS and Bootstrap, I created a layout that is both organized and visually appealing, allowing visitors to easily explore my work without distractions.</p>

                                <div className="projectButtonsContainer mt-5 d-flex justify-content-center align-items-center">
                                   <a href="https://github.com/VelaVelorem/hw-portfolio"><button type="button" className="projectButton">Github</button></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectPage;