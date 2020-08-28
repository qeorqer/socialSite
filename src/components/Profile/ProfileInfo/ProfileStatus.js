import React from "react";
import classes from "./Profileinfo.module.css";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        status: this.props.status
    };

    editModeActive =() =>{
        this.setState({
            editMode : true
        })
    }
    editModeDeactivate =() =>{
        this.setState({
            editMode : false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status){
        this.setState({
            status:this.props.status
        })
    }

    }

    render() {


        return (
            <div className={classes.status} >
                {this.state.editMode ? <div><input onChange={this.onStatusChange}type="text" value={this.state.status} autoFocus={true}/><button onClick={this.editModeDeactivate}>Save</button></div> : <p onDoubleClick={this.editModeActive}>{this.props.status ?this.props.status : "Set your status" }</p>}

            </div>

        )
    }
};
export default ProfileStatus;
