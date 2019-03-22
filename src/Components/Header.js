import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('this.props', this.props);
       
        return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"> Random Quiz</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link cursor-pointer" > Polls </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link cursor-pointer">Quiz</a>
                            </li>
                        
                    </ul>
                    </div>
                </nav>)
    }
}


export default Header;