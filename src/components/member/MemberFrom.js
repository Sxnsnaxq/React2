import React,{ Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import FormField from "../common/FormField";
import { memberformFields} from "./fromFieds";


class MemberForm extends Component {
    renderFields(formFields) {

        return formFields.map(({ label, name , type , required }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }


    render() {
        const { onMemberSubmit } = this.props;
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(onMemberSubmit)} >
                    {this.renderFields(memberformFields)}
                    <button className="btn btn-block btn-info title" type="submit" >
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
} 

function validate (values) {
    const errors = {};
    memberformFields.forEach(({name,required}) => {
        if(!values[name] && required){
            errors[name] ='กรุณากรอกข้อมูล';
        }
    });
    
    return errors;
}


function mapStateToProps({members}) {
    if(members && members.id) {
        return { initialValues : members };
    } else {
        return{};
    }

}

MemberForm = reduxForm({ validate , form : "memberForm" })(MemberForm);

export default connect(mapStateToProps)(MemberForm);