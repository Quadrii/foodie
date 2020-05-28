import React from 'react';
import './contact.css';

function Form () {
    return (
        <div className="form-holder">
            <h2 className="contact-h2 mb-4">Contact Us</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="row mb-2">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="row mr-2">
                                <div className="col">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <a href="" className="button1">Submit</a>
                        </form>
                    </div>
                    <div className="col">
                        <div>
                            <h2 className="header">Address Information</h2>
                            <ul>
                                <li>
                                    <i className="fas fa-map-marker-alt icon"></i> <b className = "infos" > 64d canal street TT 3356 Newyork, NY. < /b >
                                </li>
                                <li>
                                    <i className= "far fa-envelope icon" > < /i><b className = "infos" > Email : info@crispy.com < /b >
                                </li>
                                <li>
                                    <i className="fas fa-phone-alt icon"></i><b className = "infos" > Phone : +1 123 456 789  < /b >
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;