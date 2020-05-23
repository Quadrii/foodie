import React from 'react';
import './App.css';
import Header from './component/nav/Header';
import Slider from './component/slider/Slider';
import Crispy from './component/crispy/Crispy';
import Manna from  './component/manna/Manna';
import Whatwedo from './component/whatwedo/Whatwedo';
import Booking from './component/booking/Booking';
import Footer from './component/footer/Footer';
function App() {
    return ( <
        React.Fragment >
        <
        Header / >
        <
        Slider / >
        <
        Crispy / >

        < Manna />
        < Whatwedo />
        < Booking />
        <Footer />
        <
        /React.Fragment>
    );
};

export default App;