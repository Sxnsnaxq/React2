import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date()};
        
    }

    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick(){
        this.setState({date : new Date()});
    }

    render() {
        return (
         <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 text-left">
                    <h1 className="text-success">MEMBER</h1>
                </div>
                <div className="col-md-4 text.right">
                    <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    <ul className="list-inline">
                        <li className="list-inline-item title"> <Link className="text-success" to="/"> HOME </Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"> <Link className="text-success" to="/members"> MEMBER </Link></li>
                        <li className="list-inline-item title">|</li>
                    </ul>
                </div>      
            </div>
        </div>
        )
    }
}

export default Header;