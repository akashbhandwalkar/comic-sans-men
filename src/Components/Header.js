import React from 'react';
import Styles from './Header.scss';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden : true
        }
    }

    showHeaderMenu = () =>{
        this.setState({
            isHidden : false
        })
        
    }

    hideHeaderMenu = () =>{
        this.setState({
            isHidden : true
        })
        
    }

    render() {

        console.log('this.props', this.props);
       
        return(<div className="header-container">
                    <div>
                        
                        ComicSansMen 
                        {
                            this.state.isHidden && <i className="fa fa-angle-double-right fa-2x cursor-pointer" aria-hidden="true" onClick = {this.showHeaderMenu}></i> 
                            
                        }
                        
                        
                        {
                            !this.state.isHidden &&
                        
                            <div>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>      
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li>
                                    <i className="fa fa-angle-double-left fa-2x cursor-pointer" aria-hidden="true" onClick ={this.hideHeaderMenu}></i>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                       
                        </div>
                    }
                    </div>
            </div>)
    }
}


export default Header;