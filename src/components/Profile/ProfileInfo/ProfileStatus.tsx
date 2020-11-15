import React, {useState, useEffect, ChangeEvent} from "react";
import classes from "./Profileinfo.module.css";

type propsType = {
    status: string
    isOwner: boolean
    updateStatus: (newStatus: string) => void
}
const ProfileStatus:React.FC<propsType> = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const editModeActive = () => {
        setEditMode(true);
    }
    const editModeDeactivate = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    return (
        <div className={classes.status}>
            {editMode ?
                <div><textarea onChange={onStatusChange} value={status} autoFocus={true}/>
                    <button onClick={editModeDeactivate}>Save</button>
                </div> :
                <p onDoubleClick={() => props.isOwner && editModeActive()}>{props.status ? props.status : (props.isOwner ? "Set your status" : "")}</p>}
        </div>

    )

};
export default ProfileStatus;
