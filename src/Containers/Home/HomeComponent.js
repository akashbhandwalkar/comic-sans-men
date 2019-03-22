import React from 'react';
import { connect } from 'react-redux';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("SoilComponent", this.props);
        return(<b>Home Component</b>)
    }
}

const mapStateToProps = state => ({
    soil: state.soilReducer,
    weather: state.weatherReducer
  });

  var actions = dispatch => ({
  })
  
export default connect(mapStateToProps, actions)(HomeComponent);