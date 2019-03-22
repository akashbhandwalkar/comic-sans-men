import React from 'react';
import Styles from './Header.scss';
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('this.props', this.props);
       
        return(<div className="header-container">
                    <div>
                        ComicSansMen
                    </div>
            </div>)
    }
}


export default Header;