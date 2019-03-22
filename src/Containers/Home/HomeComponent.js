import React from 'react';
import { connect } from 'react-redux';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>Home Component</div>)
    }
}

const mapStateToProps = state => ({
    soil: state.soilReducer,
    weather: state.weatherReducer
  });

  var actions = dispatch => ({
  })
  
export default connect(mapStateToProps, actions)(HomeComponent);