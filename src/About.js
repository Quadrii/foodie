import React from 'react';
import './about.css';
import Header from './component/nav/Header';
import Footer from './component/footer/Footer';
import Banner from './component/aboutcomponent/banner/Banner';
import Whoweare from './component/aboutcomponent/whoweare/Whoweare';

function About() {
    return ( <
        React.Fragment >
            <
            Header / >
            <
            Banner / >
            <
            Whoweare / >
            <
            Footer / >
        <
        /React.Fragment>
    );
}

export default About;