import React from 'react';

class Icons extends React.Component{

    render(){
        return(<div>
            <div className = "container">
                <div className="row">
                    <div className="col-10"> 
                    </div>
                    <div className="col"> 
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="col"> 
                        <i className="fab fa-facebook-square"></i>
                    </div>
                    <div className="col">
                        <i className="fab fa-invision"></i>
                    </div>
                    <div className="col"> 
                    <i className="fab fa-linkedin"></i>
                    </div>
            </div>
            </div>
        </div>);
    }
}

export default Icons;