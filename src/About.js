import React from 'react';
import './about.css';
import Header from './component/nav/Header';
import Footer from './component/footer/Footer';
import Banner from './component/aboutcomponent/banner/Banner';
import Whoweare from './component/aboutcomponent/whoweare/Whoweare';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function About() {
    return ( < div >
        <
        Header / >
        <
        Banner / >
        <
        Whoweare / >
        <
        Footer / >
        <
        /div>

    );
}

export default About;