import React from 'react';
import Header from './component/nav/Header';
import Footer from './component/footer/Footer';
import Banner from './component/servicecomponent/banner/Banner';
import Order from './component/servicecomponent/order/Order';
import Whatwedo from './component/servicecomponent/whatwedo/Whatwedo';
import Book from './component/servicecomponent/book/Book';
function Services () {
    return (
        <React.Fragment>
            <Header/>
            <Banner/>
            <Order/>
            <Whatwedo/>
            <Book/>
            <Footer/>
        </React.Fragment>
    );
}
export default Services;