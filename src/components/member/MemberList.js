import React, { Component } from "react";
import MemberItem from "./MemberItem";

class MemberList extends Component {

    showMembers(){
        return this.props.members && this.props.members.map(member => (
            <MemberItem key={member.id} member = {member} onDelMember = {this.props.onDelMember} onEditMember = {this.props.onEditMember} />
        ))
    }

    render(){
        return ( 
            <div className="row">
                {this.showMembers()}
            </div>
        )
    }
}

export default MemberList;