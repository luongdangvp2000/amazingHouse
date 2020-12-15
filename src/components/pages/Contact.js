import Form from 'react-bootstrap/Form'
import { Row, Col, Jumbotron } from 'react-bootstrap'


function Contact() {

    return (
        <div className="contact-section my-5">
            <div>
                <img src="./images/light.jpg" />
            </div>
            <div className="card">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card-body form">
                            <h3 className="mt-4"><i className="fas fa-envelope pr-2"></i>Write to us:</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="form-contact-name" className="">Your name</label>
                                        <input type="text" id="form-contact-name" className="form-control" />

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="form-contact-email" className="">Your email</label>
                                        <input type="text" id="form-contact-email" className="form-control" />

                                    </div>
                                </div>

                            </div>

                            <div className="row">


                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="form-contact-phone" className="">Your phone</label>
                                        <input type="text" id="form-contact-phone" className="form-control" />

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="form-contact-company" className="">Your company</label>
                                        <input type="text" id="form-contact-company" className="form-control" />

                                    </div>
                                </div>


                            </div>

                            <div className="row">

                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="form-contact-message">Your message</label>
                                        <textarea id="form-contact-message" className="form-control md-textarea" rows="3"></textarea>

                                        <button className="btn btn-light"><a className="btn-floating btn-lg blue">
                                            <i className="far fa-paper-plane"></i>
                                        </a></button>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className="card-body contact text-center h-100 white-text">

                            <h3 className="my-4 pb-2">Contact information</h3>
                            <ul className="text-lg-left list-unstyled ml-4">
                                <li>
                                    <p><i className="fas fa-map-marker-alt pr-2"></i>Ha Noi, VietNam</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-phone pr-2"></i>+84352156529</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope pr-2"></i>luongdangvp2000@gmail.com</p>
                                </li>
                            </ul>

                            <hr />
                            <div className="hr-light my-4 text-center">
                                <ul className="list-inline text-center list-unstyled">
                                    <li className="list-inline-item">
                                        <a className="p-2 fa-lg tw-ic">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="p-2 fa-lg li-ic">
                                            <i className="fab fa-linkedin-in"> </i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="p-2 fa-lg ins-ic">
                                            <i className="fab fa-instagram"> </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Contact;