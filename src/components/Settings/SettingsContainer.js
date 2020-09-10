import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Settings from "./Settings";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {saveProfileThunkCreator, setPhotoThunkCreator} from "../../redux/profileReducer";

class SettingsContainer extends React.Component {
    render() {

        return (
            <Settings {...this.props} />
        );

    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
    }
)
export default compose(
    connect(mapStateToProps, {
        setPhoto: setPhotoThunkCreator,
        saveProfile: saveProfileThunkCreator
    }),
    WithAuthRedirect
)(SettingsContainer);
