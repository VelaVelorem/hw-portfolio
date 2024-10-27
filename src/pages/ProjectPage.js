import './ProjectPage.css'
import holderimg from '../imgs/600x400.png'


const ProjectPage = () => {
    return (
        <>
            <section className="projectSection">
                <div className="container">
                    <div className="row">

                        <h5 className="projectMainHeader">Projects</h5>
                        <div className="individualProjectContainer d-flex align-items-center justify-content-around flex-wrap col-12 mb-5">

                            <div className="projectImageContainer">
                                <img src={holderimg} alt="placeholder blank" className="projectImg" />
                            </div>
                            
                            <div className="projectInfoContainer">
                                <h5 className="projectHeader mb-4">Project Name</h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                <div className="projectButtonsContainer mt-5 d-flex justify-content-center align-items-center">
                                    <button type="button" className="projectButton me-5">Live Website</button>
                                    <button type="button" className="projectButton">Github</button>
                                </div>
                            </div>

                        </div>

                        <div className="individualProjectContainer d-flex align-items-center justify-content-around flex-wrap col-12">

                            <div className="projectImageContainer">
                                <img src={holderimg} alt="placeholder blank" className="projectImg" />
                            </div>
                            
                            <div className="projectInfoContainer">
                                <h5 className="projectHeader mb-4">Project Name</h5>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                <div className="projectButtonsContainer mt-5 d-flex justify-content-center align-items-center">
                                    <button type="button" className="projectButton me-5">Live Website</button>
                                    <button type="button" className="projectButton">Github</button>
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