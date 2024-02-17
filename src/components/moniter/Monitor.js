import React, { Component } from "react";
import MemberList from "../member/MemberList";

class Monitor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <MemberList members = {this.props.members} />
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;