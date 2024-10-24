import './Contact.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


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
                                        className="contactFormInput"  />
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
                                        <Button>Send</Button>
                                    </div>
                                    </Form>
                            </div>
                        </div>


                        <div className="contactInfoBox col col-sm-12 col-md-5 col-lg-5">
                            <div className="d-flex align-items-center flex-column flex-wrap">
                                <h1 className="contactH1">Let's get in touch</h1>
                                <p className="contactSub me-auto pb-5">You can reach me via...</p>

                                <p className="contactP">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <p className="contactP">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <p className="contactP">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact;