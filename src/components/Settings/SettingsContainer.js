import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Settings from "./Settings";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {setPhotoThunkCreator} from "../../redux/profileReducer";

class SettingsContainer extends React.Component {
    render() {
        return (
            <Settings {...this.props} />
        );

    }
}

let mapStateToProps = (state) => ({}

)
export default compose(
    connect(mapStateToProps, {
        setPhoto: setPhotoThunkCreator
    }),
    WithAuthRedirect
)(SettingsContainer);
