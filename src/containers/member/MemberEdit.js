import React, { Component} from "react";
import { connect } from "react-redux";
import { memberCreate, memberUpdate, memberFetch } from "../../actions"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberFrom from "../../components/member/MemberFrom";

class MemberEdit extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.memberFetch(this.props.match.params.id);
        }
    }

    render() {
        const{ formValues, match, memberCreate, memberUpdate, members} = this.props;
        return(
            <div>
                <Header />
                <div className="container col-md-5">
                    {match.path.indexOf("add") > 0 && (
                        <div>
                            <h2>เพิ่ม</h2>
                            {members.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {members.msg}
                                </div>
                            )}
                            <MemberFrom onMemberSubmit={() => memberCreate(formValues)}/>
                        </div>
                    )}

                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>แก้ไข</h2>
                            {members.saved && (
                                <div className="alert alert-secondary title" role="alert">
                                    {members.msg}
                                </div>
                            )}
                            <MemberFrom onMemberSubmit={() => memberUpdate(members.id,formValues)} />
                        </div>
                    )}
                </div>
                <Footer company= "UNRICES" email="keeratinan.p@ku.th" />
            </div>
        )
    }
} 

function mapStateToProps({form,members}) {
    return{formValues : form.memberForm ? form.memberForm.values : null, members }
}

export default connect(mapStateToProps,{memberCreate,memberUpdate,memberFetch}) (MemberEdit);