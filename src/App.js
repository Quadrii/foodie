import React from 'react';
import './App.css';
import About from './About';
import Header from './component/nav/Header';
import Slider from './component/slider/Slider';
import Crispy from './component/crispy/Crispy';
import Manna from  './component/manna/Manna';
import Whatwedo from './component/whatwedo/Whatwedo';
import Booking from './component/booking/Booking';
import Footer from './component/footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
    return ( 
        <Router>
            <
            Header / >
            <Route path="/" component={App} />
            <Route path="/about" component={About}/>
            <
            Slider / >
            <
            Crispy / >

            < Manna />
            < Whatwedo />
            < Booking />
            <Footer />
        </Router>  
    );
};

export default App;