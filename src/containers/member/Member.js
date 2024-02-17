import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberList from "../../components/member/MemberList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { membersFetch, memberDelete } from "../../actions";

class Member extends Component {
    constructor(props) {
        super(props);
        this.delMember = this.delMember.bind(this);
        this.editMember = this.editMember.bind(this);
    }

    componentDidMount(){
        this.props.membersFetch();
    }

    editMember(member) {
        this.props.history.push('members/edit/' + member.id);
    }

    delMember(member) {
        this.props.memberDelete(member.id);
    }

    render(){
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                       <div className="col-6">
                           <h1>สมาชิก</h1>
                    </div>
                    <div className="col-6">
                           <button className="btn btn-success title float-right" onClick={() => this.props.history.push('members/add')}>เพิ่ม</button>
                    </div>
                    </div>
                    {this.props.members && Array.isArray(this.props.members) &&
                    <MemberList members={this.props.members}
                        onDelMember = {this.delMember} 
                        onEditMember = {this.editMember}
                    />
                    }
                </div>
                <Footer company= "UNRICES" email="keeratinan.p@ku.th" />
         </div>
        )
    }
} 

function mapStateToProps({members}) {
    return {members};
}

export default withRouter(connect(mapStateToProps,{membersFetch,memberDelete}) (Member));