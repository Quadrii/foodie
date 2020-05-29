import React from 'react';
import Header from './component/nav/Header';
import Footer from './component/footer/Footer';
import Form from './component/contact/Form';
import Banner from './component/contact/Banner';

function Contact() {
    return ( 
        <React.Fragment >
            <Header / >
            <Banner / >
            <Form / >
            <Footer / >
        </React.Fragment>
    );
}

export default Contact;