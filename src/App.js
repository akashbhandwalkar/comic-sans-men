import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './Components/Footer';
import MainContainer from './Containers/main-container/MainContainer';
import { Provider } from 'react-redux'
import store from './redux/store';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
     
    }
  }

  

  render() {
    return (
      <Provider store={store}>

      <div className="App" >
            <MainContainer></MainContainer>
      </div>
        
        
        
        <Footer /> 
      </Provider>
    );
  }
}

export default App;
