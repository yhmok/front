// 몰라도 됨
import React from "react";

class Profile extends React.Component {
    constructor() {
        super();
        this.state={name:"이순신", age:30}
    }
    changeName=()=>{
        this.setState({name:"강감찬", age:50});
    }

    render() {
        return(
            <div>
                <h3>나는 {this.state.name} 입니다.</h3>
                <h4>나이는 {this.state.age}살 입니다.</h4>
                <button onClick={this.changeName}>버튼</button>
            </div>
        )
    }
}

export default Profile;