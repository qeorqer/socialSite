import React, {useState, useEffect} from "react";
import classes from "./Profileinfo.module.css";

const ProfileStatus = props => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);


    const editModeActive = () => {
        setEditMode(true);
    }
    const editModeDeactivate = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <div className={classes.status}>
            {editMode ?
                <div><input onChange={onStatusChange} type="text" value={status} autoFocus={true}/>
                    <button onClick={editModeDeactivate}>Save</button>
                </div> :
                <p onDoubleClick={editModeActive}>{props.status ? props.status : "Set your status"}</p>}
        </div>

    )

};
export default ProfileStatus;
