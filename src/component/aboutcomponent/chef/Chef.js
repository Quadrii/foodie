import React from 'react';
import './chef.css';
import Chef1 from './asset/Chef.png';
function Chef () {
    return (
        <React.Fragment>
            <div className="chef-wrapper">
                <h2>
                    our chefs
                </h2>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="chef-one">
                                <div className="chef_one-img">
                                </div>
                                <span className="titled">Jackson Doe</span>
                                <span className="titled">Chief Cook</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="chef-one">
                                <div className="chef_two-img">
                                </div>
                                <span className="titled">Vivian Charles</span>
                                <span className="titled">Cook</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="chef-one">
                                <div className="chef_three-img">
                                </div>
                                <span className="titled">Abraham Yong</span>
                                <span className="titled">Cook</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Chef;