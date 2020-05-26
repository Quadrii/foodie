import React from 'react';
import './Stylesheader.css';
import { Link } from 'react-router-dom';

function Header() {
    return ( <
        React.Fragment >
            <div className = "top-header" >
                <div className = "container" >
                    <div className = "float-left contact_info" >
                        <ul >
                            <li className = "email_li" >
                                <i class = "far fa-envelope email-icon" > < /i><b className = "info" > info@crispy.com < /b >
                            </li > 
                             <li className = "phone_li" >
                                <i class = "fas fa-phone-alt" > < /i> <b className = "info" > Call Us + 234815678924 < /b >  
                            </li >  
                        </ul>  
                    </div >  
                    <div className = "float-right contact_info" >
                        <p > Mon - Sun: 8: 30 am To 9: 30 pm < /p> 
                    </div>   
                </div >  
                <div className = "clearfix" > < /div>   
            </div >  
            <div className="navigation-wrap start-header start-style">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/Venture-Veteran-logo.png" alt="CRIPSY" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto py-4 py-md-0">
                                    <Link to="/">
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                            <a className="nav-link" href="">Home</a>
                                        </li>
                                    </Link>
                                    <Link to="/about">
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <a className="nav-link" href="">About Us</a>
                                        </li>
                                    </Link>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="">Services</a>
                                    </li>
                                    
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="">Gallery</a>
                                    </li>
                                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <a className="nav-link" href="">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment >
    );
};

export default Header;