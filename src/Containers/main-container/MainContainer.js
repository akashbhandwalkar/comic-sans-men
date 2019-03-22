import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeComponent from './../Home/HomeComponent';
import ForecastSoilComponent from './../Soil/Forecast/Forecast';
import Header from '../../Components/Header';
import { connect } from 'react-redux';
import Styles from './MainContainer.scss'
import CustomCarousel from './../../Components/carousel/Carousel';
class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("propss", this.props);
        return(<Router>
                    <div>
                         <Header></Header>
                         <CustomCarousel></CustomCarousel>
                        <div className="router-container">
                            <Route path="/" component={HomeComponent}></Route>
                            <Route path="/quiz" component={ForecastSoilComponent}></Route>
                        </div>
                    </div>
                </Router>)
    }
}




  export default MainContainer;