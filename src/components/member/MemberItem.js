import { Component } from "react";

class MemberItem extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const {name, sex, thumbnail, username, password, age, email, tel, add} = this.props.member;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h1 className="mt-2"> ชื่อ {name}</h1>
                <h1 className="mt-2"> เพศ {sex}</h1>
                <h1 className="mt-2"> Username {username}</h1>
                <h1 className="mt-2"> Password {password}</h1>
                <h1 className="mt-2"> อายุ {age}</h1>
                <h1 className="mt-2"> อีเมล {email}</h1>
                <h1 className="mt-2"> เบอร์โทรศัพท์ {tel}</h1>
                <h1 className="mt-2"> ที่อยู่ {add}</h1>

                {(this.props.onDelMember || this.props.onEditMember) &&
                    <button className="btn btn-info col-5 title" onClick={() => this.props.onEditMember(this.props.member)} >
                        แก้ไข
                    </button>
                }
                {(this.props.onDelMember || this.props.onEditMember) &&
                    <button className="btn btn-danger col-5 float-right title" onClick = {()=> this.props.onDelMember(this.props.member)}>
                        ลบ
                    </button>
                }
            </div>
        )
    }
}

export default MemberItem;