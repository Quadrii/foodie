import React from 'react';
import './slider.css';

function Slider() {
    return ( <
                div id = "carouselExampleSlidesOnly"
                 className = "carousel slide"
                 data-ride="carousel">
                <
                    div className = "carousel-inner" >
                <
                    div className = "carousel-item active" >
                        <div className="img_1">
                            <div className="img-opacity">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>yo</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cupiditate sint ab distinctio corrupti illum! Inventore nostrum dolores corrupti vitae quam est animi voluptatibus et ab, alias delectus cupiditate iste.</p>
                                </div>
                            </div>
                        </div>
                <
                    /div> 
                <
                    div className = "carousel-item" >
                        <div className="img_2">
                            <div className="img-opacity"></div>
                        </div>
                <
                    /div> 
                <
                    div className = "carousel-item" >
                        <div className="img_3">
                            <div className="img-opacity"></div>
                        </div>
                <
                    /div> 
                <
                    /div> 
                <
                    /div>
    );
};

export default Slider;