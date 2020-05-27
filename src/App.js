import React from 'react';
import './App.css';
import About from './About';
import Services from './Services';
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
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
            </Switch>
        </Router>  
    );
};

const Home = () => {
    return (
        <React.Fragment>
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
    </React.Fragment>
    );
}
export default App;