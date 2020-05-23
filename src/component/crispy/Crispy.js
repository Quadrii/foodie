import React from 'react';
import './crispy.css';
function Crispy () {
    return (
        <div className="Crispy">
            <h2 className="title">About Us</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="Crispy_content">
                            <h2>Enjoy the greatest pleaseure in our hotel!</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corrupti delectus odit quas porro voluptatum neque labore dolores nulla omnis vel perferendis, fugit nam quod quasi laborum similique cumque? Amet.
                            </p>
                            <ul className="menu">
                                <li>
                                    <span class="fa-stack fa-4x">
                                        <i class="fas fa-circle fa-stack-2x icon-background"></i>
                                        <i class="fas fa-utensils fa-stack-1x icon-color"></i>
                                    </span>
                                </li>

                                <li>
                                    <span class="fa-stack fa-4x">
                                        <i class="fas fa-circle fa-stack-2x icon-background"></i>
                                        <i class="fas fa-birthday-cake fa-stack-1x icon-color"></i>
                                    </span>
                                </li>

                                <li>
                                    <span class="fa-stack fa-4x">
                                        <i class="fas fa-circle fa-stack-2x icon-background"></i>
                                        <i class="fas fa-coffee fa-stack-1x icon-color"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img-holder"> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Crispy;