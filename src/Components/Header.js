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
                    <div className = "container">
                        
                    <div className="row">

                    <div className="col-sm">
                        ComicSansMen 
                    
                        {
                            this.state.isHidden && <i className="fa fa-angle-double-right fa-2x cursor-pointer" aria-hidden="true" onClick = {this.showHeaderMenu}></i> 
                            
                        }
                    </div>

                    <div className="col-sm"> 
                        {
                            !this.state.isHidden &&
                        
                            <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>      
                            </button>
            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <div className="btn-group">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Home
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button">Action</button>
                                            <button className="dropdown-item" type="button">Another action</button>
                                            <button className="dropdown-item" type="button">Something else here</button>
                                        </div>
                                        </div>
                                    </li>
                
                                    <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Portfolio
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button">Action</button>
                                            <button className="dropdown-item" type="button">Another action</button>
                                            <button className="dropdown-item" type="button">Something else here</button>
                                        </div>
                                        </div>
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
                     </div>
                    </div>
            </div>)
    }
}


export default Header;