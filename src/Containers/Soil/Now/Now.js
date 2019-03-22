import React from 'react';
import { connect } from 'react-redux';
import {dummyAction} from './../../../redux/actions/index';

class SoilComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('hello');
        this.props.dummyAction('hello');
    }

    render() {
        console.log("SoilComponent", this.props);
        return(<b>class Component</b>)
    }
}

const mapStateToProps = state => ({
    soil: state.soilReducer,
    weather: state.weatherReducer
  });

  var actions = dispatch => ({
    dummyAction: text => dispatch(dummyAction(text))
  })
  
export default connect(mapStateToProps, actions)(SoilComponent);