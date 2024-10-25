import './Contact.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';


const Contact = () => {
    return (
        <>
            <section className="contactSection">
                <div className="container">
                    <div className="row">

                        <div className="contactFormBox col col-sm-12 col-md-7 col-lg-7">

                            <div className="contactFormContent mx-auto pt-5 pb-5 px-5 mt-5 mt-auto">
                                <Form>
                                    <FormGroup>
                                        <Label
                                            for="fn" className="mr-sm-2"> Name</Label>
                                        <Input
                                            type="text"
                                            name="fn"
                                            id="fn" placeholder="Enter your name..."
                                            className="contactFormInput" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="email" className="mr-sm-2">Email</Label>
                                        <Input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your Email..."
                                            className="contactFormInput" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="examplePassword" className="mr-sm-2">Message</Label>
                                        <Input
                                            type="text"
                                            name="message"
                                            id="message"
                                            placeholder="Enter your message..."
                                            className="contactFormInput" />
                                    </FormGroup>

                                    <div className="contactBtnHolder text-center">
                                        <Button className="contactBtn mt-5" type="button">Send</Button>
                                    </div>
                                </Form>
                            </div>
                        </div>


                        <div className="contactInfoBox col col-sm-12 col-md-5 col-lg-5">
                            <div className="d-flex align-items-start flex-column flex-wrap">
                                <h1 className="contactH1">Let's get in touch</h1>
                                <p className="contactSub me-auto pb-5">You can reach me via...</p>

                                <div className="socialMediaContainer d-flex justify-content-start flex-column">
                                    <div className="individualMediaBox d-flex align-items-center mb-4">

                                        <FontAwesomeIcon icon={faEnvelope} className="mediaIcon me-5" />

                                        <a href="mailto:haneefah207@gmail.com"><button type="button" className="mediaButton">Email</button></a>
                                    </div>

                                    <div className="individualMediaBox d-flex align-items-center mb-4">

                                        <FontAwesomeIcon icon={faGithub} className="mediaIcon me-5" />

                                        <a href="https://github.com/VelaVelorem"><button type="button" className="mediaButton">Github</button></a>
                                    </div>

                                    <div className="individualMediaBox d-flex align-items-center">


                                        <FontAwesomeIcon icon={faLinkedin} className="mediaIcon me-5" />

                                        <a href="https://www.linkedin.com/in/haneefah-witherspoon/"><button type="button" className="mediaButton">Linkedin</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact;