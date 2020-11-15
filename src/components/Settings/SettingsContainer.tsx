import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Settings from "./Settings";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {saveProfileThunkCreator, setPhotoThunkCreator} from "../../redux/profileReducer";
import {StateAppType} from "../../redux/store";
import {profileType} from "../../redux/types/types";

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    setPhoto: (file:File) => void
    saveProfile: (profile:profileType) => void
}
type propsType = mapStateToPropsType & mapDispatchToPropsType;
class SettingsContainer extends React.Component<propsType> {
    render() {

        return (
            <Settings {...this.props} />
        );
    }
}

let mapStateToProps = (state:StateAppType) => ({
    profile:state.profilePage.myProfile
    }
)
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setPhoto: setPhotoThunkCreator,
        saveProfile: saveProfileThunkCreator
    }),
    WithAuthRedirect
)(SettingsContainer);
