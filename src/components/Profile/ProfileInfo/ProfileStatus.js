import React from "react";
import classes from "./Profileinfo.module.css";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMode = this.toggleMode.bind(this);
    }

    state = {
        editMode: false
    };

    toggleMode() {
        this.setState({
            editMode : !this.state.editMode
        })
    }

    render() {


        return (
            <div className={classes.status} >
                {this.state.editMode ? <div><input type="text" value={this.props.status} autoFocus={true}/><button onClick={this.toggleMode}>Save</button></div> : <p onDoubleClick={this.toggleMode}>{this.props.status}</p>}

            </div>

        )
    }
};
export default ProfileStatus;
