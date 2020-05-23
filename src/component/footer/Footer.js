import React from 'react';
import './footer.css';
function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="crispy_content">
                            <p className="title">crispy</p>
                            <p className="cont">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repudiandae distinctio aspernatur ullam quia sequi quisquam iure?
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="crispy_content content_2">
                            <p className="title">Addresss info</p>
                            <span><i class="fas fa-map-marker"></i> 64, Walter Andem, 3356, NY.</span>
                            <span><i class="fas fa-phone-alt"></i> (+234)8065478007</span>
                            <span><i class="far fa-envelope"></i> info@crispy.com</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="crispy_content content_2">
                            <p className="title">Quick Links</p>
                            <span>Order Online</span>
                            <span>Healthy Crispy</span>
                            <span>Support Helpline</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div>
                <p className="copyright">
                    &#169; 2020 Crispy. All Rights Reserved
                </p>
            </div>
        </div>
    );
}
export default Footer;