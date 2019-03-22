import React from 'react'

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <footer className="footer-position page-footer font-small blue">
            
              
              <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
              </div>
             
            
            </footer>
        )
    }

}

export default Footer;